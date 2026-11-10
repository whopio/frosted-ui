import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftBold24"
      {...props}
    >
      <path
        d="M20.566 7h-8.184c-.21 0-.382-.171-.382-.382v-3.28c0-.504-.604-.763-.97-.415L2.373 11.17c-.474.452-.474 1.21 0 1.662l8.659 8.246c.365.348.969.089.969-.416v-3.279c0-.21.171-.382.382-.382h8.184c.792 0 1.434-.642 1.434-1.434V8.434C22 7.642 21.358 7 20.566 7z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBold24.category = 'Arrows';

export default ArrowFatLeftBold24;
