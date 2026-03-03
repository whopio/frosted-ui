import * as React from 'react';
import { IconProps } from './types';

export const FireFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.75 6.98701C10.75 9.28247 8.375 11.25 6 11.25C3.625 11.25 1.25 9.28247 1.25 6.98701C1.25 6.02838 1.60741 5.20811 1.82877 4.79201C1.87558 4.70401 1.99912 4.73971 2.00443 4.83924C2.08031 6.26389 2.87763 6.91877 3.625 6.02438C4.26292 5.26098 3.81871 4.93622 4 3.50002C4.17707 2.09729 5.41999 0.595488 7.61494 0.776373C7.69937 0.78333 7.73333 0.887183 7.67406 0.947718C6.07246 2.58361 6.85433 4.34297 8.13625 5.9544C8.16798 5.99428 8.22393 6.0036 8.26435 5.97257C8.53851 5.76217 9.48282 4.90854 9.11063 3.36883C9.0864 3.26858 9.20717 3.19148 9.27891 3.26557C10.2758 4.2951 10.75 5.71193 10.75 6.98701Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

FireFilled12.category = 'Interface General';

export default FireFilled12;
