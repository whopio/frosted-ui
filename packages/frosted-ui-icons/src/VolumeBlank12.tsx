import * as React from 'react';
import { IconProps } from './types';

export const VolumeBlank12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.16797 1.43469C5.05006 0.637974 6.49964 1.25439 6.5 2.47961V9.51965C6.49998 10.7849 4.95459 11.4006 4.08398 10.4825L2.67773 9.00012H1.5C0.671707 9.00012 0.000217764 8.32836 0 7.50012V4.50012C0.000135865 3.67181 0.671657 3.00012 1.5 3.00012H2.67676L4.08398 1.51672L4.16797 1.43469ZM3.69238 4.1095C3.45636 4.35839 3.12816 4.5001 2.78516 4.50012H1.5V7.50012H2.78516C3.08517 7.50014 3.37408 7.60733 3.59961 7.8009L3.69238 7.88977L5 9.26868V2.73059L3.69238 4.1095Z"
        fill={color}
      />
    </svg>
  );
};

export default VolumeBlank12;
