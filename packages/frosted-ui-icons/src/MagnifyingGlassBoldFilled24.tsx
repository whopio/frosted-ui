import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MagnifyingGlassBoldFilled24"
      {...props}
    >
      <path
        d="M10.003.752c5.108 0 9.25 4.141 9.25 9.25 0 2.013-.646 3.873-1.737 5.392l5.296 5.295c.585.585.585 1.536 0 2.122-.586.585-1.537.585-2.123 0l-5.294-5.296c-1.519 1.091-3.38 1.737-5.392 1.737-5.109 0-9.25-4.141-9.25-9.25s4.141-9.25 9.25-9.25zm0 3c-3.452 0-6.25 2.798-6.25 6.25s2.798 6.25 6.25 6.25c3.451 0 6.25-2.798 6.25-6.25s-2.799-6.25-6.25-6.25z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MagnifyingGlassBoldFilled24.category = 'Interface General';

export default MagnifyingGlassBoldFilled24;
