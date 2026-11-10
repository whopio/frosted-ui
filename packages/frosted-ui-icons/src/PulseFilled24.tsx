import * as React from 'react';
import { IconProps } from './types';

export const PulseFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseFilled24"
      {...props}
    >
      <path
        d="M21.75 7.958l-7.512 7.513c-.186.185-.487.185-.673 0l-5.038-5.038c-.186-.186-.487-.186-.673 0L2.25 16.037"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseFilled24.category = 'Stats & Charts';

export default PulseFilled24;
