import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VideoFilled12"
      {...props}
    >
      <path
        d="M0 5.185c.085.043.18.07.281.07H12V9.1c0 1.049-.851 1.9-1.9 1.9H1.9C.851 11 0 10.149 0 9.1V5.185zM4.938 6.42c-.134-.076-.3.02-.3.174V9.71c0 .153.166.249.3.174l2.744-1.551c.134-.077.134-.27 0-.348L4.937 6.421zM1.666 4.005H.281c-.101 0-.196.026-.281.07V2.9C0 1.851.851 1 1.9 1h2.77L1.667 4.005zm4.43 0H3.435l2.788-2.79c.063-.063.11-.137.14-.215h2.738L6.096 4.005zm4.651-2.89C11.477 1.38 12 2.08 12 2.9v1.105H7.864l2.86-2.86c.009-.009.015-.02.023-.03z"
        fill={color}
      />
    </svg>
  );
};

VideoFilled12.category = 'Objects';

export default VideoFilled12;
