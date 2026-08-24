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
      data-fui-icon="ArrowFatRightFilled32"
      {...props}
    >
      <path
        d="M15 23v5.09c0 1.345 1.596 2.05 2.589 1.144l12.623-11.502c1.02-.93 1.02-2.535 0-3.464L17.589 2.766C16.596 1.86 15 2.566 15 3.909V9H3.743C2.228 9 1 10.228 1 11.743v8.514C1 21.772 2.228 23 3.743 23H15z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightFilled32.category = 'Arrows';

export default ArrowFatRightFilled32;
