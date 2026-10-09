import * as React from 'react';
import { IconProps } from './types';

export const EyeBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeBoldFilled20"
      {...props}
    >
      <path
        d="M10.003 2.43c3.246 0 5.674 1.701 7.276 3.376 1.602 1.675 2.469 3.413 2.617 3.724.054.112.108.273.108.468 0 .196-.054.356-.108.47-.148.31-1.015 2.048-2.617 3.724-1.602 1.675-4.03 3.377-7.276 3.377-3.246 0-5.675-1.702-7.277-3.377-1.603-1.676-2.47-3.415-2.618-3.725-.053-.113-.107-.273-.107-.469 0-.195.054-.356.107-.468l.246-.477c.382-.698 1.17-1.99 2.372-3.247 1.602-1.675 4.03-3.376 7.277-3.376zM10 6c-2.21 0-4 1.791-4 4 0 2.21 1.791 4 4 4s4-1.79 4-4c0-2.209-1.79-4-4-4zm0 2c1.105 0 2 .896 2 2 0 1.105-.896 2-2 2s-2-.895-2-2c0-1.104.895-2 2-2z"
        fill={color}
      />
    </svg>
  );
};

EyeBoldFilled20.category = 'Accessibility';

export default EyeBoldFilled20;
