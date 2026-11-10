import * as React from 'react';
import { IconProps } from './types';

export const PulseBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBold24"
      {...props}
    >
      <path
        d="M22 7.855l-7.705 7.705c-.19.19-.5.19-.69 0l-5.167-5.167c-.19-.19-.5-.19-.69 0L2 16.14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBold24.category = 'Stats & Charts';

export default PulseBold24;
