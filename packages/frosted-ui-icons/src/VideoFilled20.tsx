import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VideoFilled20"
      {...props}
    >
      <path
        d="M20 14.833C20 16.582 18.582 18 16.833 18H3.167C1.418 18 0 16.582 0 14.833V8.5h20v6.333zm-11.735-4.77c-.22-.124-.491.034-.492.286v5.118c0 .251.272.409.49.285l4.507-2.546c.221-.125.223-.445.002-.571l-4.507-2.572zM1.198 7H0V5.167C0 3.418 1.418 2 3.167 2h3.03L1.198 7zm15.635-5c.157 0 .312.011.463.033L12.33 7H8.944l5-5h2.889zm1.946.672c.742.58 1.221 1.48 1.221 2.495V7h-5.548l4.327-4.328zM6.823 7H3.32l5-5h3.503L6.823 7z"
        fill={color}
      />
    </svg>
  );
};

VideoFilled20.category = 'Objects';

export default VideoFilled20;
