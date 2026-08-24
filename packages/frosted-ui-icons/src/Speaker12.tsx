import * as React from 'react';
import { IconProps } from './types';

export const Speaker12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Speaker12"
      {...props}
    >
      <path
        d="M7.813 0C9.572 0 11 1.427 11 3.188v5.624C11 10.572 9.573 12 7.812 12H4.188C2.428 12 1 10.573 1 8.812V3.189C1 1.427 2.427 0 4.188 0h3.625zM4.188 1.5c-.932 0-1.688.756-1.688 1.688v5.624c0 .932.756 1.688 1.688 1.688h3.625c.931 0 1.687-.756 1.687-1.688V3.189c0-.932-.756-1.688-1.688-1.688H4.188zM6 4.75c1.243 0 2.25 1.007 2.25 2.25S7.243 9.25 6 9.25 3.75 8.243 3.75 7 4.757 4.75 6 4.75zm0 1.5c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75zM6 2.6c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Speaker12.category = 'Sound & Music';

export default Speaker12;
