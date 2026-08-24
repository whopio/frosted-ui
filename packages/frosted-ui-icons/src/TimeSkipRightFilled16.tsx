import * as React from 'react';
import { IconProps } from './types';

export const TimeSkipRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TimeSkipRightFilled16"
      {...props}
    >
      <path
        d="M8 .5c1.94 0 3.707.738 5.038 1.946.136-.543.627-.946 1.212-.946.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3C10.56 7 10 6.44 10 5.75s.56-1.25 1.25-1.25h.316C10.658 3.575 9.396 3 8 3 5.876 3 4.058 4.325 3.334 6.198 3.119 6.755 3 7.363 3 8s.119 1.245.334 1.802C4.058 11.675 5.876 13 8 13c2.124 0 3.942-1.325 4.666-3.198.249-.644.972-.965 1.616-.716.644.249.965.972.716 1.616C13.914 13.507 11.191 15.5 8 15.5c-3.191 0-5.914-1.993-6.998-4.798C.677 9.862.5 8.95.5 8s.177-1.862.502-2.702C2.086 2.493 4.809.5 8 .5zm0 3.75c.69 0 1.25.56 1.25 1.25v2.393l.793.625c.542.427.636 1.213.209 1.755-.427.543-1.214.636-1.756.21l-1.27-1-.106-.095c-.235-.234-.37-.553-.37-.888v-3c0-.69.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

TimeSkipRightFilled16.category = 'Arrows';

export default TimeSkipRightFilled16;
