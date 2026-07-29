import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallFilled32"
      {...props}
    >
      <path
        d="M23.75 14.75C24.4404 14.75 25 15.3096 25 16C25 16.6904 24.4404 17.25 23.75 17.25H8.25C7.55964 17.25 7 16.6904 7 16C7 15.3096 7.55964 14.75 8.25 14.75H23.75Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallFilled32.category = 'Interface General';

export default SubtractSmallFilled32;
