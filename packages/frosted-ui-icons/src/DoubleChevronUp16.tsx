import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.7179 8.8816C14.0107 9.17454 14.4855 9.17441 14.7784 8.8816C15.0713 8.58876 15.0712 8.11398 14.7784 7.82106L8.78624 1.82594C8.3517 1.39141 7.64652 1.39135 7.21202 1.82594L1.21983 7.82106C0.927048 8.11395 0.927046 8.58875 1.21983 8.8816C1.51275 9.17441 1.98753 9.17445 2.28038 8.8816L7.99913 3.1609L13.7179 8.8816ZM13.7179 14.28C14.0107 14.573 14.4855 14.5728 14.7784 14.28C15.0714 13.9872 15.0713 13.5124 14.7784 13.2195L8.78624 7.22438C8.35169 6.7899 7.6465 6.78977 7.21202 7.22438L1.21983 13.2195C0.927068 13.5124 0.927106 13.9872 1.21983 14.28C1.51275 14.5728 1.98753 14.5729 2.28038 14.28L7.99913 8.55934L13.7179 14.28Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp16.category = 'Arrows';

export default DoubleChevronUp16;
