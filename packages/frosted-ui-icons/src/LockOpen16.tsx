import * as React from 'react';
import { IconProps } from './types';

export const LockOpen16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 1C9.54248 1 10.9025 1.77683 11.7129 2.95996C12.0355 3.43119 11.6424 4 11.0713 4C10.7762 3.99984 10.5104 3.83634 10.3242 3.60742C9.77477 2.93207 8.93864 2.5 8 2.5C6.34315 2.5 5 3.84315 5 5.5V6.5H11.5498C13.179 6.5 14.5 7.82096 14.5 9.4502V12.0498C14.5 13.679 13.179 15 11.5498 15H4.4502C2.82096 15 1.5 13.679 1.5 12.0498V9.4502C1.5 8.15371 2.33733 7.05494 3.5 6.65918V5.5C3.5 3.01472 5.51472 1 8 1ZM4.4502 8C3.64938 8 3 8.64938 3 9.4502V12.0498C3 12.8506 3.64938 13.5 4.4502 13.5H11.5498C12.3506 13.5 13 12.8506 13 12.0498V9.4502C13 8.64938 12.3506 8 11.5498 8H4.4502Z"
        fill={color}
      />
    </svg>
  );
};

LockOpen16.category = 'Security';

export default LockOpen16;
