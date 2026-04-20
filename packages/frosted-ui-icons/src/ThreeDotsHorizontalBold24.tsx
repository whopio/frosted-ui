import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.99316 10C5.09748 10.0002 5.99301 10.8957 5.99316 12C5.99302 13.1043 5.09748 13.9998 3.99316 14C2.88881 13.9998 1.99331 13.1044 1.99316 12C1.99331 10.8957 2.88882 10.0002 3.99316 10ZM12 10C13.1044 10 13.9998 10.8956 14 12C13.9999 13.1044 13.1044 14 12 14C10.8956 13.9998 10.0001 13.1044 10 12C10.0002 10.8957 10.8957 10.0002 12 10ZM20.0225 10C21.1269 10 22.0223 10.8956 22.0225 12C22.0223 13.1044 21.1269 14 20.0225 14C18.9183 13.9997 18.0226 13.1042 18.0225 12C18.0226 10.8958 18.9183 10.0003 20.0225 10Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBold24.category = 'Interface General';

export default ThreeDotsHorizontalBold24;
