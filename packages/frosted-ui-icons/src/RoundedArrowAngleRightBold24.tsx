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
        d="M9.00018 22.9998C4.5819 22.9998 1.00018 19.418 1.00018 14.9998C1.00031 10.5816 4.58198 6.99976 9.00018 6.99976H18.7316L14.8654 3.13354C14.3776 2.64539 14.3775 1.85401 14.8654 1.36597C15.3535 0.877941 16.1448 0.878153 16.633 1.36597L22.633 7.36597C23.1211 7.85408 23.121 8.64539 22.633 9.13354L16.633 15.1335C16.1448 15.6216 15.3535 15.6217 14.8654 15.1335C14.3776 14.6454 14.3775 13.854 14.8654 13.366L18.7316 9.49976H9.00018C5.96269 9.49976 3.50031 11.9623 3.50018 14.9998C3.50018 18.0373 5.96261 20.4998 9.00018 20.4998H11.09C11.7799 20.5002 12.3399 21.0598 12.34 21.7498C12.34 22.4398 11.78 22.9993 11.09 22.9998H9.00018Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBold24.category = 'Arrows';

export default RoundedArrowAngleRightBold24;
