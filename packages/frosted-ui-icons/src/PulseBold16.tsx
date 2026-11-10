import * as React from 'react';
import { IconProps } from './types';

export const PulseBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBold16"
      {...props}
    >
      <path
        d="M14 5.569L9.398 10.17c-.116.116-.305.116-.42 0L5.826 7.02c-.117-.116-.305-.116-.421 0L2 10.427"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBold16.category = 'Stats & Charts';

export default PulseBold16;
