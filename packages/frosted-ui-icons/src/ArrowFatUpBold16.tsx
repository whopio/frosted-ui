import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpBold16"
      {...props}
    >
      <path
        d="M5 8.228v4.917c0 .472.383.855.855.855h4.29c.472 0 .855-.383.855-.855V8.228c0-.126.102-.228.228-.228h1.974c.3 0 .455-.36.248-.578L8.495 2.22c-.27-.283-.72-.283-.99 0L2.55 7.422c-.207.218-.053.578.248.578h1.974c.126 0 .228.102.228.228z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBold16.category = 'Arrows';

export default ArrowFatUpBold16;
