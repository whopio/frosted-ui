import * as React from 'react';
import { IconProps } from './types';

export const Pause20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pause20"
      {...props}
    >
      <path
        d="M5.5 3.25c.414 0 .75.336.75.75v12c0 .414-.336.75-.75.75s-.75-.336-.75-.75V4c0-.414.336-.75.75-.75zm9 0c.414 0 .75.336.75.75v12c0 .414-.336.75-.75.75s-.75-.336-.75-.75V4c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Pause20.category = 'Sound & Music';

export default Pause20;
