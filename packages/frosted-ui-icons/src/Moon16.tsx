import * as React from 'react';
import { IconProps } from './types';

export const Moon16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Moon16"
      {...props}
    >
      <path
        d="M7.277 3.723c0-.837.207-1.625.57-2.318.036-.069-.014-.152-.09-.15C4.14 1.386 1.25 4.355 1.25 8c0 3.728 3.022 6.75 6.75 6.75 3.647 0 6.616-2.892 6.744-6.507.003-.077-.08-.127-.149-.091-.693.364-1.48.57-2.318.57-2.761 0-5-2.238-5-5z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Moon16.category = 'Nature & Weather';

export default Moon16;
