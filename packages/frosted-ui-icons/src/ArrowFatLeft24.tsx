import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeft24"
      {...props}
    >
      <path
        d="M12.632 7.25h8.184c.792 0 1.434.642 1.434 1.434v6.632c0 .792-.642 1.434-1.434 1.434h-8.184c-.21 0-.382.171-.382.382v3.575c0 .498-.59.76-.959.425L2.14 12.851c-.503-.456-.503-1.246 0-1.702l9.151-8.282c.37-.333.959-.072.959.426v3.575c0 .21.171.382.382.382z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeft24.category = 'Arrows';

export default ArrowFatLeft24;
