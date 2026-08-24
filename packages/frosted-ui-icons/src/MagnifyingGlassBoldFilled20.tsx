import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MagnifyingGlassBoldFilled20"
      {...props}
    >
      <path
        d="M8.497.747c4.28 0 7.75 3.47 7.75 7.75 0 1.598-.484 3.083-1.312 4.316l3.876 3.877c.586.586.586 1.536 0 2.121-.585.586-1.535.586-2.12 0l-3.877-3.876c-1.234.828-2.72 1.312-4.317 1.312-4.28 0-7.75-3.47-7.75-7.75 0-4.28 3.47-7.75 7.75-7.75zm0 3c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75-2.127-4.75-4.75-4.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MagnifyingGlassBoldFilled20.category = 'Interface General';

export default MagnifyingGlassBoldFilled20;
