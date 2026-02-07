import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14 14L10.5856 10.5856M11.975 6.9875C11.975 9.74203 9.74203 11.975 6.9875 11.975C4.23298 11.975 2 9.74203 2 6.9875C2 4.23298 4.23298 2 6.9875 2C9.74203 2 11.975 4.23298 11.975 6.9875Z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

MagnifyingGlassFilled16.category = 'Interface General';

export default MagnifyingGlassFilled16;
