import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.74995 5.55V1.5C3.74995 1.08579 4.08574 0.75 4.49995 0.75H7.49995C7.91417 0.75 8.24995 1.08579 8.24995 1.5V5.55C8.24995 5.66046 8.33949 5.75 8.44995 5.75H10.5698C10.8306 5.75 10.9672 6.05972 10.7914 6.25228L6.44306 11.0147C6.20514 11.2753 5.7948 11.2753 5.55688 11.0147L1.2086 6.25228C1.03279 6.05972 1.1694 5.75 1.43015 5.75H3.54995C3.66041 5.75 3.74995 5.66046 3.74995 5.55Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownFilled12.category = 'Arrows';

export default ArrowFatDownFilled12;
