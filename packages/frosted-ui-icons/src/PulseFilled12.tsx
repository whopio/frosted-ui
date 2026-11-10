import * as React from 'react';
import { IconProps } from './types';

export const PulseFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseFilled12"
      {...props}
    >
      <path
        d="M10.75 4.098L7.117 7.732c-.093.092-.243.092-.336 0L4.267 5.218c-.092-.093-.243-.093-.335 0L1.25 7.9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseFilled12.category = 'Stats & Charts';

export default PulseFilled12;
