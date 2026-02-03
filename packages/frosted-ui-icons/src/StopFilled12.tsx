import * as React from 'react';
import { IconProps } from './types';

export const StopFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 0C10.3211 2.99124e-08 12 1.67893 12 3.75V8.25C12 10.3211 10.3211 12 8.25 12H3.75C1.67893 12 0 10.3211 0 8.25V3.75C0 1.67893 1.67893 2.18587e-08 3.75 0H8.25Z"
        fill={color}
      />
    </svg>
  );
};

export default StopFilled12;
