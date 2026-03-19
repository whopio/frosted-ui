import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.72277 6.36374C9.42993 6.07093 9.43002 5.59613 9.72277 5.30319C10.0156 5.01041 10.4904 5.01046 10.7833 5.30319L14.6573 9.17429C15.1131 9.62995 15.1132 10.37 14.6573 10.8257L10.7833 14.6967C10.4904 14.9894 10.0156 14.9894 9.72277 14.6967C9.43003 14.4038 9.42995 13.929 9.72277 13.6362L13.3605 10.0005L9.72277 6.36374ZM5.21984 6.36374C4.927 6.07093 4.92709 5.59613 5.21984 5.30319C5.51266 5.01041 5.98747 5.01046 6.28039 5.30319L10.1544 9.17429C10.6103 9.62995 10.6103 10.37 10.1544 10.8257L6.28039 14.6967C5.98749 14.9895 5.51266 14.9895 5.21984 14.6967C4.9271 14.4038 4.92702 13.929 5.21984 13.6362L8.85754 10.0005L5.21984 6.36374Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall20.category = 'Arrows';

export default DoubleChevronRightSmall20;
