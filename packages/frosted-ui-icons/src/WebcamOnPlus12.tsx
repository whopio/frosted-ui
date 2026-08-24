import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlus12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOnPlus12"
      {...props}
    >
      <path
        d="M6 1.5c1.344 0 2.482.884 2.863 2.102L10 2.75c.824-.618 2-.03 2 1v4.5c0 1.03-1.176 1.618-2 1l-1.137-.853C8.482 9.616 7.344 10.5 6 10.5H3c-1.657 0-3-1.343-3-3v-3c0-1.657 1.343-3 3-3h3zM3 3c-.828 0-1.5.672-1.5 1.5v3C1.5 8.328 2.172 9 3 9h3c.828 0 1.5-.672 1.5-1.5v-3C7.5 3.672 6.828 3 6 3H3zm1.5.75c.414 0 .75.336.75.75v.75H6c.414 0 .75.336.75.75s-.336.75-.75.75h-.75v.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.75H3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.75V4.5c0-.414.336-.75.75-.75zM9 5.374v1.251l1.5 1.124V4.25L9 5.374z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlus12.category = 'Interface General';

export default WebcamOnPlus12;
