import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoCircleBold24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 2c-5.247 0-9.5 4.253-9.5 9.5s4.253 9.5 9.5 9.5 9.5-4.253 9.5-9.5-4.253-9.5-9.5-9.5zm.001 7.75c.552 0 1 .448 1 1V17c0 .552-.448 1-1 1s-1-.448-1-1v-5.75c0-.552.448-1 1-1zm0-4.25c.607 0 1.1.492 1.1 1.1 0 .607-.493 1.099-1.1 1.1-.607 0-1.1-.493-1.1-1.1 0-.608.493-1.1 1.1-1.1z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBold24.category = 'Interface General';

export default InfoCircleBold24;
