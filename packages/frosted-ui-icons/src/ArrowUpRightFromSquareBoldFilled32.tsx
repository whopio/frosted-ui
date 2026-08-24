import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquareBoldFilled32"
      {...props}
    >
      <path
        d="M11.5 2c.828 0 1.5.672 1.5 1.5S12.328 5 11.5 5H10c-3.314 0-6 2.686-6 6v11c0 3.314 2.686 6 6 6h11c3.314 0 6-2.686 6-6v-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V22c0 4.97-4.03 9-9 9H10c-4.97 0-9-4.03-9-9V11c0-4.97 4.03-9 9-9h1.5zm18-1c.828 0 1.5.672 1.5 1.5V13c0 .828-.672 1.5-1.5 1.5S28 13.828 28 13V6.121l-10.94 10.94c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.121L25.879 4H19c-.828 0-1.5-.672-1.5-1.5S18.172 1 19 1h10.5z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareBoldFilled32.category = 'Arrows';

export default ArrowUpRightFromSquareBoldFilled32;
