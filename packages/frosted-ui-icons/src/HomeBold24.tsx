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
        d="M8.265 2.447c2.117-1.927 5.353-1.927 7.47 0l5.662 5.15c1.02.93 1.603 2.248 1.603 3.629v7.845C23 21.242 21.24 23 19.071 23h-2.119C15.322 23 14 21.678 14 20.047V16c0-1.104-.896-2-2-2s-2 .896-2 2v4.048C10 21.677 8.678 23 7.048 23h-2.12C2.76 23 1 21.241 1 19.072v-7.846c0-1.381.582-2.699 1.604-3.628l5.66-5.151zm6.125 1.479c-1.355-1.232-3.425-1.232-4.78 0L3.95 9.077c-.605.55-.95 1.331-.95 2.149v7.845C3 20.137 3.864 21 4.929 21h2.119c.526 0 .952-.426.952-.952V16c0-2.209 1.791-4 4-4s4 1.791 4 4v4.048c0 .526.426.952.952.952h2.12C20.135 21 21 20.137 21 19.072v-7.846c0-.818-.345-1.598-.95-2.149l-5.66-5.151z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

HomeBold24.category = 'Buildings';

export default HomeBold24;
