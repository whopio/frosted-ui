import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleFilled32"
      {...props}
    >
      <path
        d="M12.602 4.317c1.503-2.75 5.457-2.74 6.945.019l10.967 20.338c1.42 2.632-.487 5.826-3.477 5.826H4.964c-3 0-4.905-3.212-3.467-5.845L12.602 4.317z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled32.category = 'Interface General';

export default TriangleFilled32;
