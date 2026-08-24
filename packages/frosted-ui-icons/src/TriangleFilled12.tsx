import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleFilled12"
      {...props}
    >
      <path
        d="M4.275 1.518c.73-1.389 2.72-1.389 3.45 0l4.013 7.624C12.421 10.44 11.48 12 10.013 12H1.988C.52 12-.421 10.44.262 9.142l4.013-7.624z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled12.category = 'Interface General';

export default TriangleFilled12;
