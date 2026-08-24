import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoCircleFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm.001 12.5c-.414 0-.75.336-.75.75v9.5c0 .414.336.75.75.75s.75-.336.75-.75v-9.5c0-.414-.336-.75-.75-.75zm0-5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S16.691 8 16.001 8z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleFilled32.category = 'Interface General';

export default InfoCircleFilled32;
