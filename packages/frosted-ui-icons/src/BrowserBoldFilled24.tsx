import * as React from 'react';
import { IconProps } from './types';

export const BrowserBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBoldFilled24"
      {...props}
    >
      <path
        d="M23 17c0 2.761-2.239 5-5 5H6c-2.761 0-5-2.239-5-5v-6h22v6zM18 2c2.761 0 5 2.239 5 5v2H1V7c0-2.761 2.239-5 5-5h12zM5 4.75c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

BrowserBoldFilled24.category = 'Interface General';

export default BrowserBoldFilled24;
