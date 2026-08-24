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
      data-fui-icon="PauseFilled32"
      {...props}
    >
      <path
        d="M9.333 3C10.806 3 12 4.194 12 5.667v20.667C12 27.806 10.806 29 9.333 29H6.667C5.194 29 4 27.806 4 26.334V5.667C4 4.194 5.194 3 6.667 3h2.666zm16 0C26.806 3 28 4.194 28 5.667v20.667C28 27.806 26.806 29 25.333 29h-2.666C21.194 29 20 27.806 20 26.334V5.667C20 4.194 21.194 3 22.667 3h2.666z"
        fill={color}
      />
    </svg>
  );
};

PauseFilled32.category = 'Sound & Music';

export default PauseFilled32;
