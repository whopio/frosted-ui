import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.10554 2.45515C6.49585 2.06465 6.49589 1.43156 6.10554 1.04109C5.71508 0.650627 5.08202 0.650749 4.69148 1.04109L0.618239 5.11433C0.130107 5.60249 0.130101 6.39376 0.618239 6.88191L4.69148 10.9552C5.08201 11.3456 5.71506 11.3456 6.10554 10.9552C6.49585 10.5647 6.4959 9.93156 6.10554 9.54109L2.56258 5.99812L6.10554 2.45515ZM11.4552 2.45515C11.8457 2.06463 11.8457 1.43162 11.4552 1.04109C11.0646 0.650641 10.4316 0.650591 10.0411 1.04109L5.96785 5.11433C5.47974 5.60246 5.47979 6.39376 5.96785 6.88191L10.0411 10.9552C10.4316 11.3457 11.0646 11.3457 11.4552 10.9552C11.8457 10.5646 11.8457 9.93162 11.4552 9.54109L7.91218 5.99812L11.4552 2.45515Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold12.category = 'Arrows';

export default DoubleChevronLeftBold12;
