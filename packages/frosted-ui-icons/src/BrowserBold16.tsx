import * as React from 'react';
import { IconProps } from './types';

export const BrowserBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBold16"
      {...props}
    >
      <path
        d="M11.6 1.5c1.877 0 3.4 1.523 3.4 3.4v6.2c0 1.877-1.523 3.4-3.4 3.4H4.4c-1.877 0-3.4-1.523-3.4-3.4V4.9c0-1.877 1.523-3.4 3.4-3.4h7.2zM3 8.5v2.6c0 .773.627 1.4 1.4 1.4h7.2c.773 0 1.4-.627 1.4-1.4V8.5H3zm1.4-5c-.773 0-1.4.627-1.4 1.4v1.6h10V4.9c0-.773-.627-1.4-1.4-1.4H4.4zM5 4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

BrowserBold16.category = 'Interface General';

export default BrowserBold16;
