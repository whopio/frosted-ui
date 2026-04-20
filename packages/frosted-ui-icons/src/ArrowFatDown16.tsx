import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.25 7.52209V2.60465C5.25 2.13264 5.63264 1.75 6.10465 1.75H9.89535C10.3674 1.75 10.75 2.13264 10.75 2.60465V7.52209C10.75 7.64796 10.852 7.75 10.9779 7.75H13.2461C13.5399 7.75 13.6968 8.09611 13.5033 8.31711L8.51432 14.0128C8.24194 14.3238 7.75806 14.3238 7.48568 14.0128L2.49674 8.31711C2.30316 8.09611 2.4601 7.75 2.7539 7.75H5.02209C5.14796 7.75 5.25 7.64796 5.25 7.52209Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDown16.category = 'Arrows';

export default ArrowFatDown16;
