import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM21.4805 10.5195C21.1876 10.2266 20.7118 10.2266 20.4189 10.5195L16 14.9395L11.5811 10.5195C11.2882 10.2266 10.8124 10.2266 10.5195 10.5195C10.2266 10.8124 10.2266 11.2882 10.5195 11.5811L14.9395 16L10.5195 20.4189C10.2266 20.7118 10.2266 21.1876 10.5195 21.4805C10.8124 21.7733 11.2882 21.7733 11.5811 21.4805L16 17.0605L20.4189 21.4805C20.7118 21.7734 21.1876 21.7734 21.4805 21.4805C21.7734 21.1876 21.7734 20.7118 21.4805 20.4189L17.0605 16L21.4805 11.5811C21.7733 11.2882 21.7733 10.8124 21.4805 10.5195Z"
        fill={color}
      />
    </svg>
  );
};

XCircleFilled32.category = 'Interface General';

export default XCircleFilled32;
