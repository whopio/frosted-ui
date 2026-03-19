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
        d="M6.10542 2.45515C6.49572 2.06465 6.49577 1.43156 6.10542 1.04109C5.71496 0.650627 5.0819 0.650749 4.69136 1.04109L0.618117 5.11433C0.129985 5.60249 0.129979 6.39376 0.618117 6.88191L4.69136 10.9552C5.08189 11.3456 5.71493 11.3456 6.10542 10.9552C6.49573 10.5647 6.49578 9.93156 6.10542 9.54109L2.56245 5.99812L6.10542 2.45515ZM11.455 2.45515C11.8456 2.06463 11.8455 1.43162 11.455 1.04109C11.0645 0.650641 10.4315 0.650591 10.041 1.04109L5.96773 5.11433C5.47962 5.60246 5.47966 6.39376 5.96773 6.88191L10.041 10.9552C10.4315 11.3457 11.0645 11.3457 11.455 10.9552C11.8456 10.5646 11.8456 9.93162 11.455 9.54109L7.91206 5.99812L11.455 2.45515Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold12.category = 'Arrows';

export default DoubleChevronLeftBold12;
