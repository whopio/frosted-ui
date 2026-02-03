import * as React from 'react';
import { IconProps } from './types';

export const StopFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.75 0C13.6495 5.88736e-08 16 2.35051 16 5.25V10.75C16 13.6495 13.6495 16 10.75 16H5.25C2.35051 16 0 13.6495 0 10.75V5.25C1.33299e-08 2.35051 2.35051 0 5.25 0H10.75Z"
        fill={color}
      />
    </svg>
  );
};

export default StopFilled16;
