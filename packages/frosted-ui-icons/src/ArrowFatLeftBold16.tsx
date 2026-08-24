import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftBold16"
      {...props}
    >
      <path
        d="M8.228 5h4.917c.472 0 .855.383.855.855v4.29c0 .472-.383.855-.855.855H8.228c-.126 0-.228.102-.228.228v1.974c0 .3-.36.455-.578.248L2.22 8.495c-.283-.27-.283-.72 0-.99L7.422 2.55c.218-.207.578-.053.578.248v1.974c0 .126.102.228.228.228z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBold16.category = 'Arrows';

export default ArrowFatLeftBold16;
