import * as React from 'react';
import { IconProps } from './types';

export const Checkmark24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M0.75 12.9283L7.71429 19.8926L23.25 4.35686"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Checkmark24.category = 'Checkmarks';

export default Checkmark24;
