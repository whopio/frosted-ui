import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationCircle16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM8 2C4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm.002 8c.552 0 1 .448 1 1v.014c0 .552-.448 1-1 1s-1-.448-1-1V11c0-.552.448-1 1-1zm0-6.25c.414 0 .75.336.75.75V8c0 .414-.336.75-.75.75s-.75-.336-.75-.75V4.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircle16.category = 'Interface General';

export default ExclamationCircle16;
