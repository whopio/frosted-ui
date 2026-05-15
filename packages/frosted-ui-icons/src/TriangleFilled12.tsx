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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M0.925728 9.49113L4.93806 1.8677C5.38795 1.0129 6.61195 1.0129 7.06185 1.8677L11.0742 9.49113C11.4948 10.2902 10.9153 11.25 10.0123 11.25H1.98762C1.08462 11.25 0.505156 10.2902 0.925728 9.49113Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleFilled12.category = 'Interface General';

export default TriangleFilled12;
