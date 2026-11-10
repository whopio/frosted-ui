import * as React from 'react';
import { IconProps } from './types';

export const PulseFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseFilled16"
      {...props}
    >
      <path
        d="M13.75 5.67l-4.41 4.41c-.112.111-.292.111-.403 0l-3.02-3.02c-.111-.11-.292-.11-.403 0L2.25 10.326"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseFilled16.category = 'Stats & Charts';

export default PulseFilled16;
