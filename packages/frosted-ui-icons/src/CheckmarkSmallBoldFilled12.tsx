import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.11621 3.36572C8.60432 2.8779 9.3957 2.87787 9.88379 3.36572C10.3718 3.8538 10.3717 4.64515 9.88379 5.1333L5.88379 9.1333C5.39566 9.62143 4.60437 9.62139 4.11621 9.1333L2.11621 7.1333C1.62821 6.64513 1.62811 5.85383 2.11621 5.36572C2.60434 4.87786 3.3957 4.8778 3.88379 5.36572L5 6.48193L8.11621 3.36572Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled12.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled12;
