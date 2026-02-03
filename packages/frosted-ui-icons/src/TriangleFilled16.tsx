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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.07227 2.06738C6.92413 0.574052 9.07684 0.574056 9.92871 2.06738L15.6973 12.1807C16.5411 13.6605 15.4731 15.4998 13.7695 15.5H2.23145C0.527812 15.5 -0.540953 13.6605 0.302734 12.1807L6.07227 2.06738Z"
        fill={color}
      />
    </svg>
  );
};

export default TriangleFilled16;
