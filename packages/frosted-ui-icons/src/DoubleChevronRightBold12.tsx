import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.89458 2.45515C5.50428 2.06465 5.50423 1.43156 5.89458 1.04109C6.28504 0.650627 6.9181 0.650749 7.30864 1.04109L11.3819 5.11433C11.87 5.60249 11.87 6.39376 11.3819 6.88191L7.30864 10.9552C6.91811 11.3456 6.28507 11.3456 5.89458 10.9552C5.50427 10.5647 5.50422 9.93156 5.89458 9.54109L9.43755 5.99812L5.89458 2.45515ZM0.544968 2.45515C0.154447 2.06463 0.154452 1.43162 0.544968 1.04109C0.935499 0.650641 1.56853 0.650591 1.95903 1.04109L6.03227 5.11433C6.52038 5.60246 6.52034 6.39376 6.03227 6.88191L1.95903 10.9552C1.56851 11.3457 0.935493 11.3457 0.544968 10.9552C0.154444 10.5646 0.154444 9.93162 0.544968 9.54109L4.08794 5.99812L0.544968 2.45515Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold12.category = 'Arrows';

export default DoubleChevronRightBold12;
