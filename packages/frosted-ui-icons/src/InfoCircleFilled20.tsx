import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoCircleFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm.001 8c-.414 0-.75.336-.75.75v5c0 .414.336.75.75.75s.75-.336.75-.75v-5c0-.414-.336-.75-.75-.75zm0-3.5c-.552 0-1 .448-1.001 1 0 .552.449 1 1.001 1 .552 0 1-.448 1-1s-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleFilled20.category = 'Interface General';

export default InfoCircleFilled20;
