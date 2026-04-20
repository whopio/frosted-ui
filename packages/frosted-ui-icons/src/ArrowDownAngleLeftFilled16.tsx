import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.7499 2C14.4403 2 14.9999 2.55964 14.9999 3.25V8.5C14.9999 9.88071 13.8806 11 12.4999 11H5.41009L6.59173 12.0762C7.1019 12.541 7.13852 13.3315 6.67376 13.8418C6.20889 14.3519 5.41844 14.3886 4.90814 13.9238L1.40814 10.7363C1.15132 10.5023 1.00326 10.1717 0.999933 9.82422C0.996676 9.47674 1.13819 9.14318 1.39056 8.9043L4.89056 5.5918C5.39194 5.11737 6.18362 5.13932 6.65814 5.64062C7.13259 6.14203 7.11068 6.93369 6.60931 7.4082L5.45599 8.5H12.4999V3.25C12.4999 2.55967 13.0596 2.00004 13.7499 2Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftFilled16.category = 'Arrows';

export default ArrowDownAngleLeftFilled16;
