import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightBold24"
      {...props}
    >
      <path
        d="M3.434 7h8.184c.21 0 .382-.171.382-.382v-3.28c0-.504.604-.763.97-.415l8.658 8.246c.474.452.474 1.21 0 1.662l-8.659 8.246c-.365.348-.969.089-.969-.416v-3.279c0-.21-.171-.382-.382-.382H3.434C2.642 17 2 16.358 2 15.566V8.434C2 7.642 2.642 7 3.434 7z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBold24.category = 'Arrows';

export default ArrowFatRightBold24;
