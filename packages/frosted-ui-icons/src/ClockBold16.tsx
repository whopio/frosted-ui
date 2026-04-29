import * as React from 'react';
import { IconProps } from './types';

export const ClockBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM8 4C8.55223 4 8.99991 4.44779 9 5V8.01465L10.2305 8.98438C10.6643 9.32605 10.7391 9.95479 10.3975 10.3887C10.0557 10.8222 9.4269 10.8963 8.99316 10.5547L7.38086 9.28516L7.2959 9.20996C7.10772 9.02336 7.00004 8.76812 7 8.5V5C7.00009 4.44779 7.44777 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

ClockBold16.category = 'Interface General';

export default ClockBold16;
