import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.2998 12.9283L8.26409 19.8926L23.7998 4.35686"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckmarkFilled24.category = 'Checkmarks';

export default CheckmarkFilled24;
