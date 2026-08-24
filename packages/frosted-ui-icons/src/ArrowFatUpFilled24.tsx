import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpFilled24"
      {...props}
    >
      <path
        d="M17.5 13h3.207c1.148 0 1.752-1.36.982-2.212l-8.282-9.151c-.753-.833-2.06-.833-2.814 0l-8.281 9.151c-.77.851-.167 2.212.981 2.212H6.5v7.815C6.5 22.022 7.478 23 8.685 23h6.63c1.207 0 2.185-.978 2.185-2.185V13z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled24.category = 'Arrows';

export default ArrowFatUpFilled24;
