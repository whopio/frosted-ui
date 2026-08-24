import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownFilled32"
      {...props}
    >
      <path
        d="M23 15h5.091c1.344 0 2.049 1.596 1.144 2.589L17.733 30.212c-.93 1.02-2.535 1.02-3.465 0L2.766 17.589C1.86 16.596 2.566 15 3.909 15H9V3.743C9 2.228 10.23 1 11.743 1h8.514C21.772 1 23 2.228 23 3.743V15z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownFilled32.category = 'Arrows';

export default ArrowFatDownFilled32;
