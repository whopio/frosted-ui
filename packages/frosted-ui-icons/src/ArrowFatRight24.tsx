import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRight24"
      {...props}
    >
      <path
        d="M11.368 7.25H3.184c-.792 0-1.434.642-1.434 1.434v6.632c0 .792.642 1.434 1.434 1.434h8.184c.21 0 .382.171.382.382v3.575c0 .498.59.76.959.425l9.151-8.281c.503-.456.503-1.246 0-1.702l-9.151-8.282c-.37-.333-.959-.072-.959.426v3.575c0 .21-.171.382-.382.382z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRight24.category = 'Arrows';

export default ArrowFatRight24;
