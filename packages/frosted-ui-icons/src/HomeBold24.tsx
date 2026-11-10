import * as React from 'react';
import { IconProps } from './types';

export const HomeBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeBold24"
      {...props}
    >
      <path
        d="M8.265 2.447c2.117-1.927 5.353-1.927 7.47 0l5.662 5.151c1.02.93 1.603 2.247 1.603 3.628v7.846C23 21.242 21.24 23 19.071 23h-2.119C15.322 23 14 21.678 14 20.047V16c0-1.105-.896-2-2-2s-2 .895-2 2v4.047C10 21.677 8.678 23 7.048 23h-2.12C2.76 23 1 21.24 1 19.072v-7.846c0-1.38.582-2.698 1.604-3.628l5.66-5.151zm6.125 1.48c-1.355-1.233-3.425-1.233-4.78 0l-5.66 5.15c-.605.551-.95 1.331-.95 2.15v7.845C3 20.137 3.864 21 4.929 21h2.119c.526 0 .952-.427.952-.953V16c0-2.21 1.791-4 4-4s4 1.79 4 4v4.047c0 .526.426.953.952.953h2.12C20.135 21 21 20.137 21 19.072v-7.846c0-.818-.345-1.598-.95-2.148l-5.66-5.152z"
        fill={color}
      />
    </svg>
  );
};

HomeBold24.category = 'Buildings';

export default HomeBold24;
