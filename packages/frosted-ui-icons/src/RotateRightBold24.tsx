import * as React from 'react';
import { IconProps } from './types';

export const RotateRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRightBold24"
      {...props}
    >
      <path
        d="M12 .5c3.949 0 7.43 1.991 9.5 5.021V4c0-.552.448-1 1-1s1 .448 1 1v5c0 .552-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h3.12C19.108 4.751 15.815 2.5 12 2.5c-4.244 0-7.841 2.784-9.059 6.628-.286.905-.441 1.87-.441 2.872 0 1.003.155 1.967.441 2.872C4.16 18.716 7.756 21.5 12 21.5c4.244 0 7.841-2.784 9.059-6.628.166-.526.728-.818 1.255-.651.526.166.817.728.65 1.255C21.493 20.126 17.142 23.5 12 23.5s-9.492-3.373-10.965-8.024C.687 14.378.5 13.21.5 12s.187-2.378.535-3.476C2.508 3.874 6.86.5 12 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRightBold24.category = 'Arrows';

export default RotateRightBold24;
