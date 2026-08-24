import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ConnectionFilled24"
      {...props}
    >
      <path
        d="M22.854 14.45c1.529.86 1.528 3.062-.001 3.922l-9.263 5.21c-.991.558-2.203.557-3.193-.003l-9.209-5.21c-1.522-.861-1.522-3.054 0-3.916l2.792-1.581 5.677 3.211c1.447.819 3.218.821 4.668.006l5.721-3.219 2.808 1.58zM10.396.442c.99-.56 2.202-.562 3.194-.004l9.264 5.212c1.528.86 1.528 3.062-.001 3.922l-9.263 5.21c-.991.558-2.203.557-3.193-.003L1.188 9.57c-1.523-.861-1.523-3.054 0-3.916l9.208-5.21z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ConnectionFilled24.category = 'Interface General';

export default ConnectionFilled24;
