import type * as React from 'react';
import { toast } from './toast-manager';

type MaybePromise<T> = T | Promise<T>;

/**
 * Bridges the toast API with React Query's `useMutation` lifecycle hooks.
 *
 * Returns `onMutate`, `onSettled`, and `onError` callbacks that can be spread
 * into a `useMutation` options object to show loading/success/error toasts
 * tied to the mutation lifecycle.
 *
 * @example
 * ```tsx
 * const { mutate } = useCancelMembershipMutation({
 *   ...withToastPromise({
 *     loading: 'Cancelling membership...',
 *     success: 'Membership cancelled',
 *     error: (err) => parseGQLError(err) ?? 'Failed to cancel',
 *   }),
 *   onSuccess: () => { ... },
 * });
 * ```
 */
export function withToastPromise<TData = unknown, TError = unknown, TVariables = unknown>(options: {
  loading?: React.ReactNode | ((variables: TVariables) => React.ReactNode);
  success?: React.ReactNode | ((data: TData, variables: TVariables) => React.ReactNode);
  error?: React.ReactNode | ((error: TError) => React.ReactNode);
  finally?: () => MaybePromise<void>;
}) {
  let resolve: (value: TData) => void;
  let reject: (reason: TError) => void;

  return {
    onMutate(variables: TVariables) {
      const promise = new Promise<TData>((res, rej) => {
        resolve = res;
        reject = rej;
      });

      const loadingTitle = typeof options.loading === 'function' ? options.loading(variables) : options.loading;

      toast.promise(promise, {
        loading: loadingTitle,
        success: (data: TData) => {
          const successTitle = typeof options.success === 'function' ? options.success(data, variables) : options.success;
          return successTitle;
        },
        error: (err: unknown) => {
          const errorTitle = typeof options.error === 'function' ? options.error(err as TError) : options.error;
          return errorTitle;
        },
        finally: options.finally,
      });
    },

    onSettled(data: TData | undefined, error: TError | null) {
      if (error) {
        reject(error);
      } else if (data !== undefined) {
        resolve(data);
      }
    },

    onError() {
      // Errors are handled by the toast via onSettled; this is a noop
      // to prevent React Query from throwing unhandled errors.
    },
  };
}
