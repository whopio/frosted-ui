import * as React from 'react';
import { IconProps } from './types';

export const PauseCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseCircle20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM7.75 6.5c.414 0 .75.336.75.75v5.5c0 .414-.336.75-.75.75S7 13.164 7 12.75v-5.5c0-.414.336-.75.75-.75zm4.5 0c.414 0 .75.336.75.75v5.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PauseCircle20.category = 'Sound & Music';

export default PauseCircle20;
