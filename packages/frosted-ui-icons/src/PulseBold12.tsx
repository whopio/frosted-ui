import * as React from 'react';
import { IconProps } from './types';

export const PulseBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBold12"
      {...props}
    >
      <path
        d="M11.002 3.998L7.177 7.823c-.098.098-.256.098-.354 0L4.177 5.177c-.098-.098-.256-.098-.354 0L1 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBold12.category = 'Stats & Charts';

export default PulseBold12;
