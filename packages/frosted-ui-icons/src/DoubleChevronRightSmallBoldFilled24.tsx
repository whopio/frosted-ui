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
        d="M11.4141 8.05371C10.8299 7.46682 10.8314 6.51715 11.418 5.93262C12.0048 5.34817 12.9544 5.35004 13.5391 5.93652L18.168 10.584C18.945 11.3643 18.945 12.6259 18.168 13.4062L13.5391 18.0537C12.9544 18.6404 12.0048 18.6421 11.418 18.0576C10.8315 17.473 10.8297 16.5233 11.4141 15.9365L15.3389 11.9951L11.4141 8.05371ZM5.6875 8.05371C5.10295 7.46681 5.10462 6.51724 5.69141 5.93262C6.27833 5.34829 7.22795 5.34981 7.8125 5.93652L12.4414 10.584C13.2183 11.3643 13.2182 12.6259 12.4414 13.4062L7.8125 18.0537C7.22789 18.6405 6.27831 18.6421 5.69141 18.0576C5.10462 17.473 5.10296 16.5234 5.6875 15.9365L9.6123 11.9951L5.6875 8.05371Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled24;
