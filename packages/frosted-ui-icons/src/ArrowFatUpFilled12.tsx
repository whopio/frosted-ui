import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpFilled12"
      {...props}
    >
      <path
        d="M9 7h1.57c.912 0 1.39-1.084.776-1.758L6.997.48c-.535-.586-1.459-.586-1.994 0L.654 5.242C.04 5.916.517 7 1.43 7H3v3.5c0 .828.672 1.5 1.5 1.5h3c.828 0 1.5-.672 1.5-1.5V7z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled12.category = 'Arrows';

export default ArrowFatUpFilled12;
