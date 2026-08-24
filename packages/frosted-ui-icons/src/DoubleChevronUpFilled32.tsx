import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpFilled32"
      {...props}
    >
      <path
        d="M28.873 19.045c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.768L17.473 4.11c-.812-.812-2.13-.812-2.942 0L1.366 17.277c-.488.488-.488 1.28 0 1.768s1.28.488 1.768 0L16 6.174l12.872 12.87zm0 9c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.768L17.473 13.11c-.812-.812-2.13-.812-2.942 0L1.366 26.277c-.488.488-.488 1.28 0 1.768s1.28.488 1.768 0L16 15.174l12.872 12.87z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpFilled32.category = 'Arrows';

export default DoubleChevronUpFilled32;
