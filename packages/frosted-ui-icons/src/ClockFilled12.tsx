import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.5 3.7501V6.20944L7.48709 6.53849C7.88004 6.66949 8.0924 7.09423 7.96141 7.48719C7.83041 7.88014 7.40567 8.0925 7.01272 7.96151L5.51281 7.46151C5.20657 7.35942 5 7.07282 5 6.75V3.7501C5 3.33589 5.33579 3.0001 5.75 3.0001C6.16421 3.0001 6.5 3.33589 6.5 3.7501Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ClockFilled12;
