import * as React from 'react';
import { IconProps } from './types';

export const Document20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.25 7.25H13.6647C12.3311 7.25 11.25 6.16889 11.25 4.83526V0.75M17.25 6.91344V16.8353C17.25 18.1689 16.1689 19.25 14.8353 19.25H5.16474C3.83111 19.25 2.75 18.1689 2.75 16.8353V3.16474C2.75 1.83112 3.83111 0.75 5.16474 0.75H11.2417C11.8998 0.75 12.5295 1.01862 12.9849 1.49372L16.5784 5.24242C17.0094 5.69199 17.25 6.29067 17.25 6.91344Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Document20;
