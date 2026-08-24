import * as React from 'react';
import { IconProps } from './types';

export const RotateRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRightBold20"
      {...props}
    >
      <path
        d="M10 .5c3.05 0 5.762 1.437 7.5 3.669V3c0-.552.448-1 1-1s1 .448 1 1v4c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1h1.845C15.015 3.896 12.67 2.5 10 2.5c-3.209 0-5.949 2.015-7.02 4.853-.31.821-.48 1.713-.48 2.647 0 .934.17 1.826.48 2.648C4.051 15.485 6.791 17.5 10 17.5c3.209 0 5.949-2.015 7.02-4.852.195-.517.772-.778 1.289-.583.516.194.776.77.582 1.287C17.536 16.944 14.068 19.5 10 19.5s-7.536-2.557-8.89-6.148C.715 12.31.5 11.178.5 10s.216-2.309.61-3.353C2.463 3.057 5.931.5 10 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRightBold20.category = 'Arrows';

export default RotateRightBold20;
