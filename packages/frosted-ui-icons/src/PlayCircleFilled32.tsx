import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircleFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm-2.06 8.846c-1.165-.742-2.69.095-2.69 1.475V21.18c0 1.38 1.524 2.217 2.69 1.475l8.137-5.177c1.08-.688 1.08-2.266 0-2.954L13.94 9.346z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled32.category = 'Sound & Music';

export default PlayCircleFilled32;
