import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VideoFilled32"
      {...props}
    >
      <path
        d="M31 23.25c0 2.623-2.127 4.75-4.75 4.75H5.75C3.127 28 1 25.873 1 23.25V13h30v10.25zm-17.602-7.327c-.333-.19-.747.05-.748.433v7.791c0 .383.413.624.746.436l6.86-3.876c.339-.19.34-.678.003-.87l-6.86-3.914zM2.253 11.5H1V8.75C1 6.127 3.127 4 5.75 4h4.002l-7.5 7.5zM26.25 4c.404 0 .796.05 1.17.145L20.065 11.5h-6.691L20.873 4h5.377zm2.637.799C30.16 5.65 31 7.102 31 8.75v2.75h-8.814l6.7-6.701zM11.253 11.5H4.374L11.873 4h6.879l-7.5 7.5z"
        fill={color}
      />
    </svg>
  );
};

VideoFilled32.category = 'Objects';

export default VideoFilled32;
