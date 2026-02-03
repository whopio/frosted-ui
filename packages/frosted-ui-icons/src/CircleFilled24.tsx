import * as React from 'react';
import { IconProps } from './types';

export const CircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.9995 0C18.6264 0.000264019 23.999 5.3735 23.999 12.0005C23.9988 18.6272 18.6263 23.9997 11.9995 24C5.37253 24 0.000263884 18.6274 0 12.0005C3.22467e-08 5.37334 5.37236 0 11.9995 0Z"
        fill={color}
      />
    </svg>
  );
};

CircleFilled24.category = 'Interface General';

export default CircleFilled24;
