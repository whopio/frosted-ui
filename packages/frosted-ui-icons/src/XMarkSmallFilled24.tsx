import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.00005 6.99995L12.0001 12M17.0002 17.0001L12.0001 12M12.0001 12L7.00005 17.0001M12.0001 12L17.0002 6.99995"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallFilled24.category = 'Interface General';

export default XMarkSmallFilled24;
