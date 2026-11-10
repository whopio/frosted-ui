import * as React from 'react';
import { IconProps } from './types';

export const PulseFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseFilled32"
      {...props}
    >
      <path
        d="M29.75 10.246L19.135 20.86c-.26.26-.682.26-.942 0l-7.055-7.054c-.26-.26-.682-.26-.943 0L2.25 21.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseFilled32.category = 'Stats & Charts';

export default PulseFilled32;
