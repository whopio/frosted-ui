import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15 23V28.0908C15 29.4347 16.5955 30.1393 17.5889 29.2344L30.2119 17.7324C31.2321 16.8026 31.2321 15.1974 30.2119 14.2676L17.5889 2.76562C16.5955 1.86063 15 2.56529 15 3.90918V9H3.74316C2.22837 9 1 10.2284 1 11.7432L1 20.2568C1 21.7716 2.22837 23 3.74316 23H15Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightFilled32.category = 'Arrows';

export default ArrowFatRightFilled32;
