import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.7179 7.11809C14.0107 6.82516 14.4855 6.82528 14.7784 7.11809C15.0713 7.41094 15.0712 7.88571 14.7784 8.17864L8.78624 14.1738C8.3517 14.6083 7.64652 14.6083 7.21202 14.1738L1.21983 8.17864C0.927048 7.88574 0.927046 7.41094 1.21983 7.11809C1.51275 6.82528 1.98753 6.82524 2.28038 7.11809L7.99913 12.8388L13.7179 7.11809ZM13.7179 1.71965C14.0107 1.42672 14.4855 1.42685 14.7784 1.71965C15.0714 2.0125 15.0713 2.48726 14.7784 2.7802L8.78624 8.77532C8.35169 9.2098 7.6465 9.20993 7.21202 8.77532L1.21983 2.7802C0.927068 2.48733 0.927106 2.01251 1.21983 1.71965C1.51275 1.42685 1.98753 1.4268 2.28038 1.71965L7.99913 7.44036L13.7179 1.71965Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDown16.category = 'Arrows';

export default DoubleChevronDown16;
