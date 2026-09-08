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
        d="M5.143 1.93c.388-.648 1.326-.648 1.714 0l4.234 7.056c.4.666-.08 1.514-.857 1.514H1.766C.99 10.5.51 9.652.91 8.986l4.234-7.057z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled12.category = 'Interface General';

export default TriangleFilled12;
