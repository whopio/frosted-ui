import * as React from 'react';
import { IconProps } from './types';

export const PauseFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.33301 2.99963C10.8058 2.99963 12 4.19387 12 5.66663V26.3336C11.9998 27.8062 10.8057 28.9996 9.33301 28.9996H6.66699C5.19434 28.9996 4.00018 27.8062 4 26.3336V5.66663C4 4.19387 5.19423 2.99963 6.66699 2.99963H9.33301ZM25.333 2.99963C26.8058 2.99963 28 4.19387 28 5.66663V26.3336C27.9998 27.8062 26.8057 28.9996 25.333 28.9996H22.667C21.1943 28.9996 20.0002 27.8062 20 26.3336V5.66663C20 4.19387 21.1942 2.99963 22.667 2.99963H25.333Z"
        fill={color}
      />
    </svg>
  );
};

export default PauseFilled32;
