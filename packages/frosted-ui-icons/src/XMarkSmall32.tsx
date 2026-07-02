import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.4706 8.46987C22.7635 8.17713 23.2383 8.17702 23.5311 8.46987C23.8239 8.76272 23.8238 9.23755 23.5311 9.53041L17.0614 16.0001L23.5311 22.4699C23.8238 22.7628 23.8239 23.2376 23.5311 23.5304C23.2383 23.8231 22.7635 23.823 22.4706 23.5304L16.0009 17.0607L9.53114 23.5304C9.23827 23.8231 8.76345 23.8231 8.47059 23.5304C8.17775 23.2376 8.17785 22.7628 8.47059 22.4699L14.9403 16.0001L8.47059 9.53041C8.17775 9.23755 8.1778 8.76276 8.47059 8.46987C8.76349 8.17706 9.23827 8.17702 9.53114 8.46987L16.0009 14.9396L22.4706 8.46987Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall32.category = 'Interface General';

export default XMarkSmall32;
