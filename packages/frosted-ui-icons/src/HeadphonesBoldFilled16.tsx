import * as React from 'react';
import { IconProps } from './types';

export const HeadphonesBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HeadphonesBoldFilled16"
      {...props}
    >
      <path
        d="M8 1c2.71 0 4.58 1.093 5.695 2.808C14.738 5.413 15 7.38 15 9v2l-.002.024.002.05v.353C15 13.4 13.4 15 11.427 15c-1.064 0-1.927-.863-1.927-1.927V9.427c0-1.064.863-1.927 1.927-1.927.159 0 .316.011.47.031-.12-.802-.35-1.523-.717-2.089C10.67 4.657 9.79 4 8 4c-1.79 0-2.67.657-3.18 1.442-.367.566-.598 1.287-.717 2.09.154-.021.31-.032.47-.032 1.064 0 1.927.863 1.927 1.927v3.646C6.5 14.137 5.637 15 4.573 15 2.6 15 1 13.4 1 11.427v-.354l.001-.049L1 11V9c0-1.62.262-3.587 1.305-5.192C3.419 2.093 5.29 1 8 1z"
        fill={color}
      />
    </svg>
  );
};

HeadphonesBoldFilled16.category = 'Sound & Music';

export default HeadphonesBoldFilled16;
