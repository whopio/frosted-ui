import * as React from 'react';
import { IconProps } from './types';

export const ControlsBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsBoldFilled12"
      {...props}
    >
      <path
        d="M4 6.5c1.166 0 2.16.726 2.56 1.75H11c.552 0 1 .448 1 1s-.448 1-1 1H6.56C6.16 11.274 5.166 12 4 12c-1.166 0-2.16-.726-2.56-1.75H1c-.552 0-1-.448-1-1s.448-1 1-1h.44C1.84 7.226 2.834 6.5 4 6.5zM8 0c1.166 0 2.16.726 2.56 1.75H11c.552 0 1 .448 1 1s-.448 1-1 1h-.44C10.16 4.774 9.166 5.5 8 5.5c-1.166 0-2.16-.726-2.56-1.75H1c-.552 0-1-.448-1-1s.448-1 1-1h4.44C5.84.726 6.834 0 8 0z"
        fill={color}
      />
    </svg>
  );
};

ControlsBoldFilled12.category = 'Interface General';

export default ControlsBoldFilled12;
