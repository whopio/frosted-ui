import * as React from 'react';
import { IconProps } from './types';

export const PulseFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseFilled20"
      {...props}
    >
      <path
        d="M17.75 6.814l-5.961 5.961c-.149.15-.39.15-.538 0L7.222 8.747c-.149-.149-.39-.149-.538 0L2.25 13.18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseFilled20.category = 'Stats & Charts';

export default PulseFilled20;
