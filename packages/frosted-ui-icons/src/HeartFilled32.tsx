import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HeartFilled32"
      {...props}
    >
      <path
        d="M23.125 4C27.411 4 31 7.333 31 12.08c0 5.264-2.985 9.343-6.186 12.205-3.207 2.866-6.724 4.599-8.011 5.182-.517.234-1.09.234-1.606 0-1.287-.583-4.804-2.316-8.01-5.182C3.985 21.423 1 17.345 1 12.08 1 7.333 4.589 4 8.875 4c2.938 0 4.907 1.308 6.126 2.613.417.447.746.894.999 1.287.253-.393.582-.84.999-1.287C18.219 5.308 20.187 4 23.125 4z"
        fill={color}
      />
    </svg>
  );
};

HeartFilled32.category = 'Interface General';

export default HeartFilled32;
