import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.2692 3.31002C19.8549 2.72423 19.855 1.77466 19.2692 1.18893C18.6835 0.603357 17.7339 0.603357 17.1481 1.18893L3.98018 14.3569C3.07009 15.267 3.07006 16.7428 3.98018 17.6528L17.1481 30.8169C17.734 31.4025 18.6835 31.4026 19.2692 30.8169C19.8549 30.231 19.8549 29.2815 19.2692 28.6958L6.57491 16.0053L19.2692 3.31002ZM28.2692 3.31002C28.8549 2.72423 28.855 1.77466 28.2692 1.18893C27.6835 0.603357 26.7339 0.603357 26.1481 1.18893L12.9802 14.3569C12.0701 15.267 12.0701 16.7428 12.9802 17.6528L26.1481 30.8169C26.734 31.4025 27.6835 31.4025 28.2692 30.8169C28.8549 30.231 28.8549 29.2815 28.2692 28.6958L15.5749 16.0053L28.2692 3.31002Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled32.category = 'Arrows';

export default DoubleChevronLeftBoldFilled32;
