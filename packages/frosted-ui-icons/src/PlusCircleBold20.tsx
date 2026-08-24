import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusCircleBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm-.041 3.25c.552 0 1 .448 1 1v2.209h2.291c.552 0 1 .448 1 1s-.448 1-1 1h-2.291v2.291c0 .552-.448 1-1 1s-1-.448-1-1v-2.291H6.75c-.552 0-1-.448-1-1s.448-1 1-1h2.209V6.75c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBold20.category = 'Interface General';

export default PlusCircleBold20;
