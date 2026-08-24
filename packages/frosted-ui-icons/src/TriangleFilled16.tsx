import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleFilled16"
      {...props}
    >
      <path
        d="M6.076 2.263c.82-1.539 3.026-1.539 3.847 0l4.817 9.03c.774 1.453-.278 3.207-1.924 3.207H3.183c-1.645 0-2.698-1.754-1.924-3.206l4.817-9.031z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled16.category = 'Interface General';

export default TriangleFilled16;
