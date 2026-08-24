import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDown24"
      {...props}
    >
      <path
        d="M7.25 11.368V3.184c0-.792.642-1.434 1.434-1.434h6.632c.792 0 1.434.642 1.434 1.434v8.184c0 .21.171.382.382.382h3.575c.498 0 .76.59.425.959l-8.281 9.151c-.456.503-1.246.503-1.702 0l-8.282-9.151c-.333-.37-.072-.959.426-.959h3.575c.21 0 .382-.171.382-.382z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDown24.category = 'Arrows';

export default ArrowFatDown24;
