import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpBold24"
      {...props}
    >
      <path
        d="M7 20.566v-8.184c0-.21-.171-.382-.382-.382h-3.28c-.504 0-.763-.604-.415-.97l8.246-8.658c.452-.474 1.21-.474 1.662 0l8.246 8.659c.348.365.089.969-.416.969h-3.279c-.21 0-.382.171-.382.382v8.184c0 .792-.642 1.434-1.434 1.434H8.434C7.642 22 7 21.358 7 20.566z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBold24.category = 'Arrows';

export default ArrowFatUpBold24;
