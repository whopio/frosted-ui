import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.43827 3.43023C8.92419 2.93994 8.92072 2.14864 8.43046 1.66266C7.94016 1.177 7.14878 1.18036 6.66288 1.67047L1.16776 7.21344C0.541042 7.8459 0.546305 8.86675 1.1785 9.49371L6.67069 14.938C7.16099 15.424 7.95229 15.4205 8.43827 14.9302C8.92419 14.4399 8.92071 13.6486 8.43046 13.1627L3.56913 8.34332L8.43827 3.43023ZM14.9344 3.43316C15.4224 2.94503 15.4224 2.15373 14.9344 1.66559C14.4462 1.17774 13.6548 1.17757 13.1668 1.66559L7.67167 7.1607C7.04208 7.79041 7.04222 8.81123 7.67167 9.44098L13.1668 14.9341C13.655 15.4222 14.4463 15.4222 14.9344 14.9341C15.4223 14.4459 15.4224 13.6546 14.9344 13.1666L10.0672 8.30133L14.9344 3.43316Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftFilled16.category = 'Arrows';

export default DoubleChevronLeftFilled16;
