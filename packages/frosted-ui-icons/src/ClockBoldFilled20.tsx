import * as React from 'react';
import { IconProps } from './types';

export const ClockBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClockBoldFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 3.875c-.621 0-1.125.504-1.125 1.125v5c0 .299.119.583.327.793l.095.086 2.5 2c.485.388 1.194.31 1.582-.176.388-.485.31-1.194-.176-1.582L11.125 9.96V5.5c0-.621-.504-1.125-1.125-1.125z"
        fill={color}
      />
    </svg>
  );
};

ClockBoldFilled20.category = 'Interface General';

export default ClockBoldFilled20;
