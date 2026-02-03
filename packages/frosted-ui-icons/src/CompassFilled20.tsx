import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_6096_12)">
        <path
          d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C6.44277e-08 4.47715 4.47715 6.44257e-08 10 0ZM13.5361 7.49512C13.7803 6.85051 13.1495 6.21967 12.5049 6.46387L8.9668 7.80566C8.43164 8.00865 8.00865 8.43164 7.80566 8.9668L6.46387 12.5049C6.21967 13.1495 6.85051 13.7803 7.49512 13.5361L11.0332 12.1943C11.5684 11.9913 11.9913 11.5684 12.1943 11.0332L13.5361 7.49512Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_6096_12">
          <path fill={color} d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CompassFilled20;
