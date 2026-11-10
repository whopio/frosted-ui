import * as React from 'react';
import { IconProps } from './types';

export const Trash16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Trash16"
      {...props}
    >
      <path
        d="M11.274 4.75l-.422-1.064C10.388 2.517 9.258 1.75 8 1.75c-1.258 0-2.388.767-2.852 1.936L4.726 4.75m6.548 0H4.726m6.548 0h1.488m-8.036 0H3.238m-1.488 0h1.488m0 0l.995 7.936c.112.894.871 1.564 1.771 1.564h3.992c.9 0 1.66-.67 1.771-1.564l.995-7.936m0 0h1.488"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Trash16.category = 'Interface General';

export default Trash16;
