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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.38696 2.92334C10.5433 0.812951 13.5769 0.819557 14.7239 2.93506L22.6272 17.5122C23.7251 19.5372 22.2588 22.0005 19.9553 22.0005H4.06469C1.75539 22.0003 0.28998 19.5258 1.39965 17.5005L9.38696 2.92334Z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled24.category = 'Interface General';

export default TriangleFilled24;
