import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownFilled12"
      {...props}
    >
      <path
        d="M9 5h1.57c.912 0 1.39 1.084.776 1.758L6.997 11.52c-.535.586-1.459.586-1.994 0L.654 6.758C.04 6.084.517 5 1.43 5H3V1.5C3 .672 3.672 0 4.5 0h3C8.328 0 9 .672 9 1.5V5z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownFilled12.category = 'Arrows';

export default ArrowFatDownFilled12;
