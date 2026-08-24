import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HeartFilled16"
      {...props}
    >
      <path
        d="M11.625 1.5C14.008 1.5 16 3.359 16 5.979c0 2.828-1.604 4.995-3.27 6.485-1.672 1.494-3.5 2.394-4.17 2.697-.359.163-.761.163-1.12 0-.67-.303-2.498-1.203-4.17-2.697C1.605 10.974 0 8.807 0 5.979 0 3.359 1.993 1.5 4.375 1.5c1.57 0 2.66.73 3.339 1.44.105.11.2.22.286.328.087-.107.181-.219.286-.329.679-.709 1.77-1.439 3.339-1.439z"
        fill={color}
      />
    </svg>
  );
};

HeartFilled16.category = 'Interface General';

export default HeartFilled16;
