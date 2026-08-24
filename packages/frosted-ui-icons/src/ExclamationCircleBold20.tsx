import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationCircleBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm-.001 10.25c.69 0 1.25.56 1.25 1.25v.017c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V14c0-.69.56-1.25 1.25-1.25zm0-8.5c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleBold20.category = 'Interface General';

export default ExclamationCircleBold20;
