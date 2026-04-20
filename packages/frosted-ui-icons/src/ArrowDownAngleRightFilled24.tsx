import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25012 3.5C1.55985 3.5001 1.00012 4.0597 1.00012 4.75V13.375C1.00012 15.1008 2.39931 16.4999 4.12512 16.5H18.6056L16.3917 18.5908C15.89 19.0648 15.8672 19.8565 16.3409 20.3584C16.8149 20.8602 17.6066 20.883 18.1085 20.4092L22.6085 16.1592C22.8585 15.923 23.0001 15.5939 23.0001 15.25C23.0001 14.9061 22.8585 14.577 22.6085 14.3408L18.1085 10.0908C17.6066 9.61704 16.8149 9.63978 16.3409 10.1416C15.8672 10.6435 15.89 11.4352 16.3917 11.9092L18.6056 14H4.12512C3.78003 13.9999 3.50012 13.7201 3.50012 13.375V4.75C3.50012 4.05964 2.94048 3.5 2.25012 3.5Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightFilled24.category = 'Arrows';

export default ArrowDownAngleRightFilled24;
