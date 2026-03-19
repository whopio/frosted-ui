import * as React from 'react';
import { IconProps } from './types';

export const ArrowDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.0006 22.25L3.75049 14M12.0006 22.25L20.2505 14M12.0006 22.25V1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDown24.category = 'Arrows';

export default ArrowDown24;
