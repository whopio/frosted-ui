import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneBoldFilled24"
      {...props}
    >
      <path
        d="M14.799 1.514c2.089-.64 4.2.924 4.201 3.108v2.155c0 .022.016.04.037.043.412.068.977.204 1.554.489.58.285 1.193.731 1.659 1.42.47.695.75 1.58.75 2.67 0 1.09-.28 1.974-.75 2.67-.466.688-1.08 1.133-1.66 1.42-.576.283-1.141.42-1.553.488-.021.004-.037.021-.037.042v2.17c0 2.195-2.133 3.759-4.227 3.099l-4.382-1.383c-.194-.06-.39.084-.391.286V21.5c0 .828-.672 1.5-1.5 1.5S7 22.328 7 21.5V3.9l7.799-2.386zM4 17.89l-.203-.064C2.132 17.302 1 15.758 1 14.013V8.696c0-1.758 1.148-3.31 2.83-3.825L4 4.818V17.89z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneBoldFilled24.category = 'Objects';

export default MegaphoneBoldFilled24;
