import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeftFilled12"
      {...props}
    >
      <path
        d="M10.75 1c.69 0 1.25.56 1.25 1.25v4.062C12 7.52 11.02 8.5 9.811 8.5H4.215l.367.377c.482.494.472 1.285-.022 1.767s-1.285.472-1.767-.021l-2.438-2.5c-.473-.486-.473-1.26 0-1.746l2.438-2.5c.482-.494 1.273-.503 1.767-.022.494.482.504 1.274.022 1.768L4.215 6H9.5V2.25c0-.69.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftFilled12.category = 'Arrows';

export default ArrowDownAngleLeftFilled12;
