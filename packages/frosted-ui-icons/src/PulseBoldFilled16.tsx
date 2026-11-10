import * as React from 'react';
import { IconProps } from './types';

export const PulseBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBoldFilled16"
      {...props}
    >
      <path
        d="M13.5 5.771L9.282 9.99c-.107.107-.28.107-.386 0L6.008 7.101c-.107-.106-.28-.106-.386 0L2.5 10.225"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBoldFilled16.category = 'Stats & Charts';

export default PulseBoldFilled16;
