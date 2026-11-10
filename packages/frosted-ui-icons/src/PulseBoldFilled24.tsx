import * as React from 'react';
import { IconProps } from './types';

export const PulseBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBoldFilled24"
      {...props}
    >
      <path
        d="M21.5 8.062l-7.32 7.32c-.18.18-.474.18-.655 0l-4.909-4.909c-.18-.181-.475-.181-.656 0l-5.46 5.46"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBoldFilled24.category = 'Stats & Charts';

export default PulseBoldFilled24;
