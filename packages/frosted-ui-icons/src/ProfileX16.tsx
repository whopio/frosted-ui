import * as React from 'react';
import { IconProps } from './types';

export const ProfileX16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.3341 10.6667L12.0008 12M12.0008 12L10.6675 13.3334M12.0008 12L10.6675 10.6667M12.0008 12L13.3341 13.3334M7.9024 8.83424C5.69028 8.87257 4.01455 10.2039 3.32244 12.0753C3.0499 12.8122 3.67909 13.5 4.46476 13.5H8.16746M7.9024 8.83424C7.93506 8.83364 7.96786 8.83337 8.0008 8.83337C8.34753 8.83337 8.6814 8.86497 9.0008 8.92531M7.9024 8.83424C7.469 8.84177 7.0564 8.89891 6.66753 9.00004M10.5008 4.33337C10.5008 5.71409 9.38146 6.83337 8.0008 6.83337C6.62007 6.83337 5.50078 5.71409 5.50078 4.33337C5.50078 2.95266 6.62007 1.83337 8.0008 1.83337C9.38146 1.83337 10.5008 2.95266 10.5008 4.33337Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileX16;
