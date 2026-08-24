import * as React from 'react';
import { IconProps } from './types';

export const NotePlusFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="NotePlusFilled20"
      {...props}
    >
      <path
        d="M14.65 0C17.605 0 20 2.395 20 5.35v9.28c-.235-.082-.487-.13-.75-.13H19v-.25c0-1.243-1.007-2.25-2.25-2.25s-2.25 1.007-2.25 2.25v.25h-.25c-1.243 0-2.25 1.007-2.25 2.25S13.007 19 14.25 19h.25v.25c0 .263.048.515.13.75H5.35C2.395 20 0 17.605 0 14.65v-9.3C0 2.395 2.395 0 5.35 0h9.3zm2.1 13.5c.414 0 .75.336.75.75V16h1.75c.414 0 .75.336.75.75s-.336.75-.75.75H17.5v1.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V17.5h-1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H16v-1.75c0-.414.336-.75.75-.75zM6 13.25c-.414 0-.75.336-.75.75s.336.75.75.75h5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H6zm0-4c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H6zm0-4c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H6z"
        fill={color}
      />
    </svg>
  );
};

NotePlusFilled20.category = 'Interface General';

export default NotePlusFilled20;
