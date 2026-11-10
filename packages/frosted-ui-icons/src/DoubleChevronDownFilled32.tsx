import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownFilled32"
      {...props}
    >
      <path
        d="M28.873 12.866c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L17.473 27.802c-.813.812-2.13.812-2.943 0L1.366 14.634c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L16 25.737l12.872-12.87zm0-9c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L17.473 18.802c-.813.812-2.13.812-2.943 0L1.366 5.634c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L16 16.737l12.872-12.87z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownFilled32.category = 'Arrows';

export default DoubleChevronDownFilled32;
