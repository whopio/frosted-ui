import * as React from 'react';
import { IconProps } from './types';

export const TimeSkipRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TimeSkipRightFilled20"
      {...props}
    >
      <path
        d="M10 .5c2.772 0 5.264 1.188 7 3.08v-.33c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25S13.56 6 14.25 6h1.495C14.48 4.186 12.377 3 10 3 6.984 3 4.41 4.908 3.426 7.588 3.15 8.338 3 9.15 3 10c0 .85.15 1.662.426 2.412C4.409 15.092 6.984 17 10 17s5.59-1.908 6.574-4.588c.238-.648.956-.98 1.604-.743.648.238.98.955.743 1.604C17.588 16.905 14.099 19.5 10 19.5c-4.098 0-7.588-2.595-8.92-6.227C.703 12.25.5 11.148.5 10c0-1.148.204-2.25.58-3.272C2.411 3.095 5.901.5 10 .5zm0 4.251c.69 0 1.25.559 1.25 1.249v3.898l1.531 1.225c.54.431.627 1.219.196 1.758-.432.539-1.22.626-1.758.195l-2-1.6-.105-.094c-.231-.233-.364-.55-.364-.881v-4.5c0-.69.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

TimeSkipRightFilled20.category = 'Arrows';

export default TimeSkipRightFilled20;
