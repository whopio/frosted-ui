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
        d="M9.33301 2.99969C10.8058 2.99969 12 4.19393 12 5.66669V26.3337C11.9998 27.8063 10.8057 28.9997 9.33301 28.9997H6.66699C5.19434 28.9997 4.00018 27.8063 4 26.3337V5.66669C4 4.19393 5.19423 2.99969 6.66699 2.99969H9.33301ZM25.333 2.99969C26.8058 2.99969 28 4.19393 28 5.66669V26.3337C27.9998 27.8063 26.8057 28.9997 25.333 28.9997H22.667C21.1943 28.9997 20.0002 27.8063 20 26.3337V5.66669C20 4.19393 21.1942 2.99969 22.667 2.99969H25.333Z"
        fill={color}
      />
    </svg>
  );
};

PauseFilled32.category = 'Sound & Music';

export default PauseFilled32;
