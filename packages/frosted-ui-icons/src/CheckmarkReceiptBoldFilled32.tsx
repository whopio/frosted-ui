import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceiptBoldFilled32"
      {...props}
    >
      <path
        d="M24.25.75c2.761 0 5 2.239 5 5v23.84c0 1.214-1.298 1.986-2.364 1.406L21.65 28.15l-4.782 2.846c-.536.319-1.203.319-1.74 0l-4.773-2.845-5.243 2.846c-1.066.579-2.363-.192-2.363-1.405V5.75c0-2.761 2.239-5 5-5h16.5zm-2.793 9.043c-.39-.39-1.024-.39-1.414 0l-5.923 5.923-2.163-2.163c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.023 0 1.414l2.87 2.87c.188.188.442.293.707.293.265 0 .52-.105.707-.293l6.63-6.63c.39-.39.39-1.023 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled32.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled32;
