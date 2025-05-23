import * as React from 'react';
import { IconProps } from './types';

export const RotateRight16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M13.173 9.83333C12.418 11.9695 10.3807 13.5 7.98596 13.5C4.9484 13.5 2.48596 11.0375 2.48596 8C2.48596 4.96243 4.9484 2.5 7.98596 2.5C9.86409 2.5 11.1194 3.30292 12.3333 4.67261M12.8333 2.66667V4.83333C12.8333 5.10947 12.6094 5.33333 12.3333 5.33333H10.1666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RotateRight16;
