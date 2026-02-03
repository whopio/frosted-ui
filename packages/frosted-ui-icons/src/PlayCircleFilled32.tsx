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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM14.708 9.83398C13.2102 8.88092 11.2501 9.95706 11.25 11.7324V20.2676C11.2501 22.0429 13.2102 23.1191 14.708 22.166L21.4141 17.8984C22.8034 17.0143 22.8034 14.9857 21.4141 14.1016L14.708 9.83398Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled32.category = 'Sound & Music';

export default PlayCircleFilled32;
