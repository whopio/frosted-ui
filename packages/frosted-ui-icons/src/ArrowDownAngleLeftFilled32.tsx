import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeftFilled32"
      {...props}
    >
      <path
        d="M29.75 4.5c.69 0 1.25.56 1.25 1.25V17.5c0 2.07-1.679 3.75-3.75 3.75H5.354l4.263 4.099c.497.478.513 1.27.035 1.767-.478.498-1.27.513-1.768.035l-6.5-6.25C1.14 20.666 1 20.34 1 20c0-.34.14-.666.384-.901l6.5-6.25c.498-.478 1.29-.463 1.768.035.478.497.462 1.289-.035 1.767L5.354 18.75H27.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftFilled32.category = 'Arrows';

export default ArrowDownAngleLeftFilled32;
