import * as React from 'react';
import { IconProps } from './types';

export const ScaleOfJustice12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_7079_907)">
        <path
          d="M6.00039 0.75V11.25M6.00039 11.25H4.00039M6.00039 11.25H8.00039M2.40049 2.75L3.91992 6.44006C4.07026 6.80517 4.12527 7.22345 3.89744 7.54594C3.65972 7.88243 3.21389 8.25 2.40049 8.25C1.58715 8.25 1.14129 7.88249 0.903527 7.54601C0.675628 7.22349 0.730634 6.80513 0.881005 6.43997L2.40049 2.75ZM2.40049 2.75H9.60049M9.60049 2.75L8.08105 6.44006C7.93071 6.80517 7.8757 7.22345 8.10353 7.54594C8.34126 7.88243 8.78709 8.25 9.60049 8.25C10.4139 8.25 10.8597 7.88243 11.0974 7.54594C11.3253 7.22345 11.2703 6.80517 11.1199 6.44006L9.60049 2.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7079_907">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ScaleOfJustice12;
