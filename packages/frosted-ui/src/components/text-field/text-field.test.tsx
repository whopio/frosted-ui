import { act, fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';

import * as TextField from './text-field';

async function nextFrame() {
  await act(async () => {
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => resolve());
    });
  });
}

function Field({
  before,
  after,
  defaultValue = 'hello',
}: {
  before?: React.ReactNode;
  after?: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <TextField.Root>
      {before}
      <TextField.Input aria-label="Value" defaultValue={defaultValue} />
      {after}
    </TextField.Root>
  );
}

describe('TextField.Root pointer down', () => {
  it('keeps a select in a slot focused so its menu stays open', async () => {
    render(
      <Field
        before={
          <TextField.Slot>
            <select aria-label="Country" defaultValue="us">
              <option value="us">United States</option>
              <option value="ca">Canada</option>
            </select>
          </TextField.Slot>
        }
      />,
    );

    const select = screen.getByRole('combobox', { name: 'Country' });
    const input = screen.getByRole('textbox', { name: 'Value' });
    const onBlur = vi.fn();
    select.addEventListener('blur', onBlur);
    select.focus();

    fireEvent.pointerDown(select);
    await nextFrame();

    expect(document.activeElement).toBe(select);
    expect(onBlur).not.toHaveBeenCalled();
    expect(document.activeElement).not.toBe(input);
  });

  it('lets a button in a slot activate', async () => {
    const onClick = vi.fn();
    render(
      <Field
        after={
          <TextField.Slot>
            <button type="button" onClick={onClick}>
              Go
            </button>
          </TextField.Slot>
        }
      />,
    );

    const button = screen.getByRole('button', { name: 'Go' });
    const input = screen.getByRole('textbox', { name: 'Value' });
    button.focus();

    fireEvent.pointerDown(button);
    await nextFrame();
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledOnce();
    expect(document.activeElement).toBe(button);
    expect(document.activeElement).not.toBe(input);
  });

  it('focuses the text input and places the caret when the slot padding or an icon is pressed', async () => {
    render(
      <Field
        before={
          <TextField.Slot data-testid="leading">
            <svg data-testid="icon" viewBox="0 0 16 16">
              <path d="M0 0h16v16H0z" />
            </svg>
          </TextField.Slot>
        }
        after={<TextField.Slot data-testid="trailing">USD</TextField.Slot>}
      />,
    );

    const input = screen.getByRole('textbox', { name: 'Value' }) as HTMLInputElement;
    const icon = screen.getByTestId('icon');
    const leading = screen.getByTestId('leading');
    const trailing = screen.getByTestId('trailing');

    fireEvent.pointerDown(icon);
    await nextFrame();

    expect(document.activeElement).toBe(input);
    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(0);

    input.blur();

    fireEvent.pointerDown(leading);
    await nextFrame();

    expect(document.activeElement).toBe(input);
    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(0);

    input.blur();

    fireEvent.pointerDown(trailing);
    await nextFrame();

    expect(document.activeElement).toBe(input);
    expect(input.selectionStart).toBe(input.value.length);
    expect(input.selectionEnd).toBe(input.value.length);
  });
});
