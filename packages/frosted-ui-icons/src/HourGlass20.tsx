import * as React from 'react';
import { IconProps } from './types';

export const HourGlass20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <path
        d="M8 10C8 7.83286 4.40423 8.7478 4.03117 3.00415C3.99538 2.45302 4.44772 2 5 2H15C15.5523 2 16.0046 2.45302 15.9688 3.00415C15.5958 8.7478 12 7.83286 12 10C12 12.1671 15.5958 11.2522 15.9688 16.9959C16.0046 17.547 15.5523 18 15 18H5C4.44772 18 3.99538 17.547 4.03117 16.9959C4.40423 11.2522 8 12.1671 8 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.45141 7.69496C8.10599 7.04266 6.87149 6.01172 6.56995 4.93096C6.49574 4.66498 6.72513 4.4375 7.00127 4.4375H12.9987C13.2749 4.4375 13.5043 4.66498 13.4301 4.93096C13.1285 6.01172 11.894 7.04266 10.5486 7.69496C10.202 7.863 9.79798 7.863 9.45141 7.69496Z"
        fill={color}
      />
    </svg>
  );
};

export default HourGlass20;
