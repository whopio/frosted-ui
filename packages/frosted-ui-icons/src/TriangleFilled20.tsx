import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.77051 1.73828C8.74058 -0.0170905 11.2632 -0.0169067 12.2334 1.73828L19.6826 15.2168C20.6216 16.9163 19.3919 19 17.4502 19H2.55371C0.612301 18.9997 -0.617529 16.9162 0.321289 15.2168L7.77051 1.73828Z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled20.category = 'Interface General';

export default TriangleFilled20;
