import * as React from 'react';
import { IconProps } from './types';

export const PlayCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircle32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4.75 9.732c0-1.775 1.96-2.851 3.458-1.898l6.706 4.268c1.39.884 1.39 2.912 0 3.796l-6.706 4.268c-1.498.953-3.458-.123-3.458-1.898v-8.536zm2.652-.632c-.499-.318-1.152.04-1.152.632v8.536c0 .591.653.95 1.152.632l6.706-4.267c.463-.295.463-.971 0-1.266L13.902 11.1z"
        fill={color}
      />
    </svg>
  );
};

PlayCircle32.category = 'Sound & Music';

export default PlayCircle32;
