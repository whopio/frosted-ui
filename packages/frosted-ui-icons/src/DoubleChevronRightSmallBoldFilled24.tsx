import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.4139 8.05371C10.8297 7.46682 10.8313 6.51715 11.4178 5.93262C12.0046 5.34817 12.9543 5.35004 13.5389 5.93652L18.1678 10.584C18.9449 11.3643 18.9449 12.6259 18.1678 13.4062L13.5389 18.0537C12.9543 18.6404 12.0047 18.6421 11.4178 18.0576C10.8314 17.473 10.8296 16.5233 11.4139 15.9365L15.3387 11.9951L11.4139 8.05371ZM5.68738 8.05371C5.10283 7.46681 5.1045 6.51724 5.69128 5.93262C6.2782 5.34829 7.22783 5.34981 7.81238 5.93652L12.4413 10.584C13.2182 11.3643 13.2181 12.6259 12.4413 13.4062L7.81238 18.0537C7.22777 18.6405 6.27819 18.6421 5.69128 18.0576C5.1045 17.473 5.10283 16.5234 5.68738 15.9365L9.61218 11.9951L5.68738 8.05371Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled24;
