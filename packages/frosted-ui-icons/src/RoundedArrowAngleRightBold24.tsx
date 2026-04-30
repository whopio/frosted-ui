import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.00042 22.9998C4.58214 22.9998 1.00042 19.418 1.00042 14.9998C1.00055 10.5816 4.58222 6.99976 9.00042 6.99976H18.7319L14.8657 3.13354C14.3779 2.64539 14.3777 1.85401 14.8657 1.36597C15.3537 0.877941 16.1451 0.878153 16.6332 1.36597L22.6332 7.36597C23.1213 7.85408 23.1212 8.64539 22.6332 9.13354L16.6332 15.1335C16.1451 15.6216 15.3538 15.6217 14.8657 15.1335C14.3779 14.6454 14.3777 13.854 14.8657 13.366L18.7319 9.49976H9.00042C5.96293 9.49976 3.50055 11.9623 3.50042 14.9998C3.50042 18.0373 5.96285 20.4998 9.00042 20.4998H11.0903C11.7801 20.5002 12.3401 21.0598 12.3403 21.7498C12.3403 22.4398 11.7802 22.9993 11.0903 22.9998H9.00042Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBold24.category = 'Arrows';

export default RoundedArrowAngleRightBold24;
