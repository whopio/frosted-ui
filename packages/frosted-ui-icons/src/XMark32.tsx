import * as React from 'react';
import { IconProps } from './types';

export const XMark32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M25.1923 7.86822C25.4852 7.57533 25.4852 7.10045 25.1923 6.80756C24.8994 6.51467 24.4246 6.51467 24.1317 6.80756L15.9999 14.9393L7.86822 6.80766C7.57533 6.51477 7.10045 6.51477 6.80756 6.80766C6.51467 7.10056 6.51467 7.57543 6.80756 7.86832L14.9392 16L6.80756 24.1317C6.51467 24.4246 6.51467 24.8994 6.80756 25.1923C7.10046 25.4852 7.57533 25.4852 7.86822 25.1923L15.9999 17.0607L24.1317 25.1924C24.4246 25.4853 24.8994 25.4853 25.1923 25.1924C25.4852 24.8995 25.4852 24.4247 25.1923 24.1318L17.0606 16L25.1923 7.86822Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default XMark32;
