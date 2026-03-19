import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5 9L19.0286 15.5286C19.2889 15.7889 19.2889 16.2111 19.0286 16.4714L12.5 22.9999"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled32.category = 'Arrows';

export default ChevronRightBoldFilled32;
