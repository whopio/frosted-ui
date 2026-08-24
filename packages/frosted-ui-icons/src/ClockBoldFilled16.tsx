import * as React from 'react';
import { IconProps } from './types';

export const ClockBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClockBoldFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM8 4c-.552 0-1 .448-1 1v3.5c0 .268.108.523.296.71l.085.075 1.612 1.27c.434.341 1.063.267 1.405-.166.341-.434.266-1.063-.168-1.405L9 8.014V5c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

ClockBoldFilled16.category = 'Interface General';

export default ClockBoldFilled16;
