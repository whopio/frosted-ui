import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpFilled16"
      {...props}
    >
      <path
        d="M11.5 9h1.746c.939 0 1.44-1.106.822-1.812l-4.99-5.695c-.57-.652-1.585-.652-2.156 0l-4.99 5.695C1.316 7.894 1.817 9 2.755 9H4.5v4.396C4.5 14.281 5.22 15 6.105 15h3.79c.887 0 1.605-.718 1.605-1.604V9z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled16.category = 'Arrows';

export default ArrowFatUpFilled16;
