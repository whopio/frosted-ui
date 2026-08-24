import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircleBold32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm0 2C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16 23.456 2.5 16 2.5zm-5 9.232c0-1.972 2.178-3.168 3.842-2.109l6.706 4.268c1.544.982 1.544 3.236 0 4.218l-6.706 4.268C13.178 23.436 11 22.24 11 20.267v-8.535zm2.769-.421c-.333-.212-.769.027-.769.421v8.536c0 .394.436.633.769.421l6.706-4.267c.308-.197.308-.647 0-.844l-6.706-4.268z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBold32.category = 'Sound & Music';

export default PlayCircleBold32;
