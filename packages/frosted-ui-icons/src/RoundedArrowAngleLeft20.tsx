import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeft20"
      {...props}
    >
      <path
        d="M12.75 18.998c3.451 0 6.249-2.798 6.249-6.249 0-3.45-2.798-6.249-6.249-6.249h-9.2l4.212-4.22c.292-.293.292-.768-.001-1.061-.293-.293-.77-.292-1.062.001L1.221 6.71c-.293.293-.293.768 0 1.06l5.48 5.48c.292.293.767.293 1.06 0 .292-.293.292-.767 0-1.06L3.572 8h9.178c2.623 0 4.749 2.127 4.749 4.75 0 2.622-2.126 4.748-4.749 4.748h-2c-.414 0-.75.336-.75.75s.336.75.75.75h2z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeft20.category = 'Arrows';

export default RoundedArrowAngleLeft20;
