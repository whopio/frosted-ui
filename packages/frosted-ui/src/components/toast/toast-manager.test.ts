import type * as React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

let mockManagerAdd: ReturnType<typeof vi.fn>;
let mockManagerUpdate: ReturnType<typeof vi.fn>;
let mockManagerClose: ReturnType<typeof vi.fn>;

vi.mock('@base-ui/react/toast', () => {
  let idCounter = 0;
  return {
    Toast: {
      createToastManager: () => {
        mockManagerAdd = vi.fn((opts) => {
          const id = opts?.id ?? `toast-${++idCounter}`;
          return id;
        });
        mockManagerUpdate = vi.fn();
        mockManagerClose = vi.fn();
        return { add: mockManagerAdd, update: mockManagerUpdate, close: mockManagerClose };
      },
    },
  };
});

let toast: typeof import('./toast-manager').toast;

beforeEach(async () => {
  vi.resetModules();

  let idCounter = 0;
  mockManagerAdd = vi.fn((opts) => {
    const id = opts?.id ?? `toast-${++idCounter}`;
    return id;
  });
  mockManagerUpdate = vi.fn();
  mockManagerClose = vi.fn();

  vi.doMock('@base-ui/react/toast', () => ({
    Toast: {
      createToastManager: () => ({
        add: mockManagerAdd,
        update: mockManagerUpdate,
        close: mockManagerClose,
      }),
    },
  }));

  const mod = await import('./toast-manager');
  toast = mod.toast;
});

describe('toast.promise', () => {
  describe('with all options defined', () => {
    it('creates a loading toast, then updates to success', async () => {
      const result = await toast.promise(Promise.resolve('data'), {
        loading: 'Loading...',
        success: 'Done!',
        error: 'Failed',
      });

      expect(result).toBe('data');
      expect(mockManagerAdd).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Loading...', type: 'loading' }),
      );
      expect(mockManagerUpdate).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ title: 'Done!', type: 'success' }),
      );
    });

    it('creates a loading toast, then updates to error on rejection', async () => {
      const err = new Error('boom');
      await expect(
        toast.promise(Promise.reject(err), {
          loading: 'Loading...',
          success: 'Done!',
          error: 'Failed',
        }),
      ).rejects.toThrow('boom');

      expect(mockManagerAdd).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Loading...', type: 'loading' }),
      );
      expect(mockManagerUpdate).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ title: 'Failed', type: 'error' }),
      );
    });
  });

  describe('with loading undefined', () => {
    it('does not create a loading toast when loading is undefined', async () => {
      await toast.promise(Promise.resolve('data'), {
        success: 'Done!',
      });

      const loadingCalls = mockManagerAdd.mock.calls.filter(
        (args) => args[0].type === 'loading',
      );
      expect(loadingCalls).toHaveLength(0);
    });

    it('still creates a success toast when loading is undefined', async () => {
      await toast.promise(Promise.resolve('data'), {
        success: 'Done!',
      });

      const successCalls = mockManagerAdd.mock.calls.filter(
        (args) => args[0].type === 'success',
      );
      expect(successCalls).toHaveLength(1);
      expect(successCalls[0][0]).toMatchObject({ title: 'Done!', type: 'success' });
    });

    it('creates an error toast directly when loading is undefined and promise rejects', async () => {
      await expect(
        toast.promise(Promise.reject(new Error('boom')), {
          error: 'Failed',
        }),
      ).rejects.toThrow('boom');

      const loadingCalls = mockManagerAdd.mock.calls.filter(
        (args) => args[0].type === 'loading',
      );
      expect(loadingCalls).toHaveLength(0);

      const errorCalls = mockManagerAdd.mock.calls.filter(
        (args) => args[0].type === 'error',
      );
      expect(errorCalls).toHaveLength(1);
      expect(errorCalls[0][0]).toMatchObject({ title: 'Failed', type: 'error' });
    });
  });

  describe('with success undefined', () => {
    it('dismisses the loading toast instead of showing an empty success toast', async () => {
      await toast.promise(Promise.resolve('data'), {
        loading: 'Loading...',
      });

      const successUpdateCalls = mockManagerUpdate.mock.calls.filter(
        (args) => args[1].type === 'success',
      );
      expect(successUpdateCalls).toHaveLength(0);

      expect(mockManagerClose).toHaveBeenCalled();
    });
  });

  describe('with error undefined', () => {
    it('dismisses the loading toast instead of showing an empty error toast', async () => {
      await expect(
        toast.promise(Promise.reject(new Error('boom')), {
          loading: 'Loading...',
        }),
      ).rejects.toThrow('boom');

      const errorUpdateCalls = mockManagerUpdate.mock.calls.filter(
        (args) => args[1].type === 'error',
      );
      expect(errorUpdateCalls).toHaveLength(0);

      expect(mockManagerClose).toHaveBeenCalled();
    });
  });

  describe('with all options undefined', () => {
    it('does not create or update any toasts', async () => {
      await toast.promise(Promise.resolve('data'), {});

      expect(mockManagerAdd).not.toHaveBeenCalled();
      expect(mockManagerUpdate).not.toHaveBeenCalled();
    });

    it('does not create or update any toasts on rejection', async () => {
      await expect(toast.promise(Promise.reject(new Error('boom')), {})).rejects.toThrow('boom');

      expect(mockManagerAdd).not.toHaveBeenCalled();
      expect(mockManagerUpdate).not.toHaveBeenCalled();
    });

    it('returns the resolved value even when no toasts are shown', async () => {
      const result = await toast.promise(Promise.resolve('data'), {});
      expect(result).toBe('data');
    });
  });

  describe('with function options', () => {
    it('does not create a loading toast when loading function returns undefined', async () => {
      await toast.promise(Promise.resolve('data'), {
        loading: () => undefined as unknown as React.ReactNode,
        success: 'Done!',
      });

      const loadingCalls = mockManagerAdd.mock.calls.filter(
        (args) => args[0].type === 'loading',
      );
      expect(loadingCalls).toHaveLength(0);
    });

    it('evaluates the success function and skips toast when it returns undefined', async () => {
      await toast.promise(Promise.resolve('data'), {
        loading: 'Loading...',
        success: () => undefined as unknown as string,
      });

      const successUpdateCalls = mockManagerUpdate.mock.calls.filter(
        (args) => args[1].type === 'success',
      );
      expect(successUpdateCalls).toHaveLength(0);
      expect(mockManagerClose).toHaveBeenCalled();
    });

    it('evaluates the error function and skips toast when it returns undefined', async () => {
      await expect(
        toast.promise(Promise.reject(new Error('boom')), {
          loading: 'Loading...',
          error: () => undefined as unknown as string,
        }),
      ).rejects.toThrow('boom');

      const errorUpdateCalls = mockManagerUpdate.mock.calls.filter(
        (args) => args[1].type === 'error',
      );
      expect(errorUpdateCalls).toHaveLength(0);
      expect(mockManagerClose).toHaveBeenCalled();
    });
  });

  describe('finally callback', () => {
    it('calls finally regardless of outcome', async () => {
      const finallyCb = vi.fn();
      await toast.promise(Promise.resolve('data'), {
        loading: 'Loading...',
        success: 'Done!',
        finally: finallyCb,
      });
      expect(finallyCb).toHaveBeenCalledTimes(1);
    });
  });
});
