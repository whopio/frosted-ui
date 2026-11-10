import * as React from 'react';
import { IconProps } from './types';

export const PulseBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBoldFilled20"
      {...props}
    >
      <path
        d="M17.5 6.917l-5.769 5.769c-.144.144-.377.144-.52 0l-3.9-3.899c-.143-.144-.376-.144-.52 0L2.5 13.078"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBoldFilled20.category = 'Stats & Charts';

export default PulseBoldFilled20;
