import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusCircleBold24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 2c-5.247 0-9.5 4.253-9.5 9.5s4.253 9.5 9.5 9.5 9.5-4.253 9.5-9.5-4.253-9.5-9.5-9.5zm0 4.25c.552 0 1 .448 1 1V11h3.25c.552 0 1 .448 1 1s-.448 1-1 1H13v3.25c0 .552-.448 1-1 1s-1-.448-1-1V13H7.75c-.552 0-1-.448-1-1s.448-1 1-1H11V7.75c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBold24.category = 'Interface General';

export default PlusCircleBold24;
