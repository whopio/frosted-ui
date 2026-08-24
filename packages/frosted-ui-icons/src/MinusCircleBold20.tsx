import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircleBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm3.25 6.459c.552 0 1 .448 1 1s-.448 1-1 1h-6.5c-.552 0-1-.448-1-1s.448-1 1-1h6.5z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBold20.category = 'Interface General';

export default MinusCircleBold20;
