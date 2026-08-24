import * as React from 'react';
import { IconProps } from './types';

export const Pulse20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pulse20"
      {...props}
    >
      <path
        d="M18.477 5.463c.296-.289.771-.284 1.061.012.29.296.284.771-.012 1.06l-7.101 6.944c-.438.428-1.136.428-1.574 0L6.728 9.448l-5.202 5.088c-.296.29-.77.284-1.06-.012-.29-.296-.285-.771.011-1.06L5.942 8.12l.085-.076c.41-.327.994-.327 1.404 0l.085.076 4.122 4.03 6.84-6.687z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pulse20.category = 'Stats & Charts';

export default Pulse20;
