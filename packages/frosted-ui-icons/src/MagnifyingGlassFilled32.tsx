import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M30 30L22.0331 22.0331M25.275 13.6375C25.275 20.0647 20.0647 25.275 13.6375 25.275C7.21029 25.275 2 20.0647 2 13.6375C2 7.21029 7.21029 2 13.6375 2C20.0647 2 25.275 7.21029 25.275 13.6375Z"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

MagnifyingGlassFilled32.category = 'Interface General';

export default MagnifyingGlassFilled32;
