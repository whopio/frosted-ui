import * as React from 'react';
import { IconProps } from './types';

export const TrophyFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrophyFilled16"
      {...props}
    >
      <path
        d="M10.8789 1C11.7741 1.00025 12.4997 1.7259 12.5 2.62109V3H13.25C14.2165 3 15 3.7835 15 4.75V6.25C15 7.76878 13.7688 9 12.25 9H12.2422C11.7049 10.5195 10.376 11.6637 8.75 11.9365V13.5H10.25C10.6642 13.5 11 13.8358 11 14.25C11 14.6642 10.6642 15 10.25 15H5.75C5.33579 15 5 14.6642 5 14.25C5 13.8358 5.33579 13.5 5.75 13.5H7.25V11.9365C5.62403 11.6637 4.2951 10.5195 3.75781 9H3.75C2.23122 9 1 7.76878 1 6.25V4.75C1 3.7835 1.7835 3 2.75 3H3.5V2.62109C3.50025 1.7259 4.2259 1.00025 5.12109 1H10.8789ZM2.75 4.5C2.61193 4.5 2.5 4.61193 2.5 4.75V6.25C2.5 6.85471 2.92948 7.35876 3.5 7.47461V4.5H2.75ZM12.5 7.47461C13.0705 7.35876 13.5 6.85471 13.5 6.25V4.75C13.5 4.61193 13.3881 4.5 13.25 4.5H12.5V7.47461Z"
        fill={color}
      />
    </svg>
  );
};

TrophyFilled16.category = 'Objects';

export default TrophyFilled16;
