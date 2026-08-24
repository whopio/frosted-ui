import * as React from 'react';
import { IconProps } from './types';

export const Trash20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Trash20"
      {...props}
    >
      <path
        d="M10.426 0c1.563 0 2.906 1.114 3.194 2.651L13.873 4H18c.414 0 .75.336.75.75s-.336.75-.75.75h-.344l-1.551 11.696C15.992 18.772 14.682 20 13.095 20h-6.19c-1.587 0-2.897-1.228-3.01-2.804L2.345 5.5H2c-.414 0-.75-.336-.75-.75S1.586 4 2 4h4.128l.253-1.349C6.669 1.114 8.01 0 9.575 0h.85zM5.382 16.999l.006.06c.042.807.709 1.44 1.517 1.441h6.19c.808 0 1.475-.634 1.517-1.441l.006-.06L16.145 5.5H3.855l1.527 11.499zM9.575 1.5c-.842 0-1.565.6-1.72 1.428L7.652 4h4.694l-.201-1.072C11.99 2.1 11.268 1.5 10.425 1.5h-.85z"
        fill={color}
      />
    </svg>
  );
};

Trash20.category = 'Interface General';

export default Trash20;
