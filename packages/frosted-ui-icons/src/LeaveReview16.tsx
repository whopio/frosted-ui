import * as React from 'react';
import { IconProps } from './types';

export const LeaveReview16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.75 1H4.75C2.54086 1 0.75 2.79086 0.75 5V11C0.75 13.2091 2.54086 15 4.75 15H10.75C12.9591 15 14.75 13.2091 14.75 11V9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9217 2.02862L7.43603 5.51439C7.11491 5.83551 6.91264 6.25636 6.86249 6.70772L6.69684 8.19856C6.64023 8.70809 7.07077 9.13863 7.5803 9.08201L9.07111 8.91637C9.52248 8.86621 9.94335 8.66393 10.2645 8.34279L13.7501 4.85705M10.9217 2.02862L11.5362 1.41419C12.3172 0.63318 13.5835 0.633197 14.3645 1.41423V1.41423C15.1456 2.19529 15.1456 3.46165 14.3645 4.2427L13.7501 4.85705M10.9217 2.02862L13.7501 4.85705"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LeaveReview16;
