import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11 11L8.15469 8.15469M9.31251 5.15625C9.31251 7.45169 7.45169 9.31251 5.15625 9.31251C2.86082 9.31251 1 7.45169 1 5.15625C1 2.86082 2.86082 1 5.15625 1C7.45169 1 9.31251 2.86082 9.31251 5.15625Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

MagnifyingGlassFilled12.category = 'Interface General';

export default MagnifyingGlassFilled12;
