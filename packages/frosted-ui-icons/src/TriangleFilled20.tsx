import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleFilled20"
      {...props}
    >
      <path
        d="M7.712 2.813c.98-1.818 3.59-1.813 4.562.01l6.327 11.873c.919 1.723-.33 3.804-2.283 3.804H3.595c-1.957 0-3.205-2.09-2.277-3.814L7.712 2.813z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled20.category = 'Interface General';

export default TriangleFilled20;
