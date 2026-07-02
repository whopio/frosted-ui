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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.6021 4.31738C14.1046 1.56637 18.0595 1.57681 19.5474 4.33594L30.5142 24.6738C31.9337 27.3061 30.0273 30.5 27.0366 30.5H4.96438C1.96477 30.4998 0.0590594 27.288 1.4966 24.6553L12.6021 4.31738Z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled32.category = 'Interface General';

export default TriangleFilled32;
