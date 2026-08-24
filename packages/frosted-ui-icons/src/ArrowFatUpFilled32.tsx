import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpFilled32"
      {...props}
    >
      <path
        d="M23 17h5.091c1.344 0 2.049-1.595 1.144-2.589L17.733 1.788c-.93-1.02-2.535-1.02-3.465 0L2.766 14.411C1.86 15.405 2.566 17 3.909 17H9v11.257C9 29.772 10.23 31 11.743 31h8.514C21.772 31 23 29.772 23 28.257V17z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled32.category = 'Arrows';

export default ArrowFatUpFilled32;
