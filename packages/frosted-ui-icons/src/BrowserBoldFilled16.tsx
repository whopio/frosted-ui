import * as React from 'react';
import { IconProps } from './types';

export const BrowserBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBoldFilled16"
      {...props}
    >
      <path
        d="M15 11.1c0 1.877-1.523 3.4-3.4 3.4H4.4c-1.877 0-3.4-1.523-3.4-3.4V8.5h14v2.6zm-3.4-9.6c1.877 0 3.4 1.523 3.4 3.4v1.6H1V4.9c0-1.877 1.523-3.4 3.4-3.4h7.2zM4 3.25c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

BrowserBoldFilled16.category = 'Interface General';

export default BrowserBoldFilled16;
