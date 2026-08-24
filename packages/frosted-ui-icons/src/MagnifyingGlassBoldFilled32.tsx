import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MagnifyingGlassBoldFilled32"
      {...props}
    >
      <path
        d="M13.5.751c7.041 0 12.75 5.708 12.75 12.75 0 2.979-1.025 5.716-2.737 7.887l7.3 7.3c.585.585.585 1.535 0 2.12-.586.586-1.536.586-2.122 0l-7.3-7.3c-2.17 1.715-4.91 2.743-7.891 2.743-7.042 0-12.75-5.709-12.75-12.75C.75 6.459 6.458.751 13.5.751zm0 3c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75c5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.365-9.75-9.75-9.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MagnifyingGlassBoldFilled32.category = 'Interface General';

export default MagnifyingGlassBoldFilled32;
