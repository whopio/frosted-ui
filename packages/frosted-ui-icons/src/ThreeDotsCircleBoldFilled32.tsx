import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleBoldFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM9.333 14.167c-1.012 0-1.833.82-1.833 1.833 0 1.012.82 1.834 1.833 1.834 1.012 0 1.834-.822 1.834-1.834s-.822-1.833-1.834-1.833zm6.667 0c-1.012 0-1.833.82-1.833 1.833 0 1.012.82 1.834 1.833 1.834 1.012 0 1.834-.822 1.834-1.834s-.822-1.833-1.834-1.833zm6.663 0c-1.012 0-1.833.82-1.833 1.833 0 1.012.82 1.834 1.833 1.834 1.012 0 1.834-.822 1.834-1.834s-.822-1.833-1.834-1.833z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleBoldFilled32.category = 'Interface General';

export default ThreeDotsCircleBoldFilled32;
