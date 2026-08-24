import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleFilled24"
      {...props}
    >
      <path
        d="M9.387 2.923c1.156-2.11 4.19-2.103 5.337.012l7.903 14.577C23.725 19.537 22.26 22 19.955 22H4.065C1.755 22 .29 19.526 1.4 17.5L9.387 2.923z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled24.category = 'Interface General';

export default TriangleFilled24;
