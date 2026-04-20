import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.45 3.74995L10.5 3.74995C10.9142 3.74995 11.25 4.08574 11.25 4.49995V7.49995C11.25 7.91417 10.9142 8.24995 10.5 8.24995H6.45C6.33954 8.24995 6.25 8.33949 6.25 8.44995V10.5698C6.25 10.8306 5.94028 10.9672 5.74772 10.7914L0.98529 6.44306C0.724706 6.20514 0.724707 5.7948 0.985292 5.55688L5.74772 1.2086C5.94028 1.03279 6.25 1.1694 6.25 1.43015V3.54995C6.25 3.66041 6.33954 3.74995 6.45 3.74995Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftFilled12.category = 'Arrows';

export default ArrowFatLeftFilled12;
