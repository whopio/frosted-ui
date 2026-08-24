import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceiptBoldFilled32"
      {...props}
    >
      <path
        d="M24.25.75c2.761 0 5 2.239 5 5v23.84c0 1.214-1.298 1.986-2.364 1.406L21.65 28.15l-4.782 2.847c-.536.319-1.203.318-1.74 0l-4.773-2.846-5.243 2.847c-1.066.579-2.363-.192-2.363-1.405V5.75c0-2.761 2.239-5 5-5h16.5zM9.5 14.5c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1h-8zm0-6c-.552 0-1 .448-1 1s.448 1 1 1h13c.552 0 1-.448 1-1s-.448-1-1-1h-13z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceiptBoldFilled32.category = 'Money & Shopping';

export default ReceiptBoldFilled32;
