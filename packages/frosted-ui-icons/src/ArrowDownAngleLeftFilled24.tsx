import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.7502 3.5C22.4405 3.5001 23.0002 4.0597 23.0002 4.75V13.375C23.0002 15.1008 21.6011 16.4999 19.8752 16.5H5.39478L7.60864 18.5908C8.11037 19.0648 8.13318 19.8565 7.65942 20.3584C7.18548 20.8602 6.39376 20.883 5.89185 20.4092L1.39185 16.1592C1.14182 15.923 1.00024 15.5939 1.00024 15.25C1.00024 14.9061 1.14182 14.577 1.39185 14.3408L5.89185 10.0908C6.39376 9.61704 7.18548 9.63978 7.65942 10.1416C8.13318 10.6435 8.11037 11.4352 7.60864 11.9092L5.39478 14H19.8752C20.2203 13.9999 20.5002 13.7201 20.5002 13.375V4.75C20.5002 4.05964 21.0599 3.5 21.7502 3.5Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftFilled24.category = 'Arrows';

export default ArrowDownAngleLeftFilled24;
