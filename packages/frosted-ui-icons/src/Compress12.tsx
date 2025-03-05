import * as React from 'react';
import { IconProps } from './types';

export const Compress12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.00004 4.72135V.710938M7.00004 4.72135L4.95837 2.67969M7.00004 4.72135L9.04171 2.67969M6.99996 9.27852L6.99996 13.2889M6.99996 9.27852L9.04163 11.3202M6.99996 9.27852L4.95829 11.3202M2.1875 7H11.8125"
        stroke={color}
        strokeWidth="1.313"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Compress12;
