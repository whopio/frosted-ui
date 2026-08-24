import * as React from 'react';
import { IconProps } from './types';

export const ListBullet24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListBullet24"
      {...props}
    >
      <path
        d="M5.75 14c1.519 0 2.75 1.231 2.75 2.75S7.269 19.5 5.75 19.5 3 18.269 3 16.75 4.231 14 5.75 14zm0 1.5c-.69 0-1.25.56-1.25 1.25S5.06 18 5.75 18 7 17.44 7 16.75s-.56-1.25-1.25-1.25zm14.5.5c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5zM5.75 4.5c1.519 0 2.75 1.231 2.75 2.75S7.269 10 5.75 10 3 8.769 3 7.25 4.231 4.5 5.75 4.5zm0 1.5c-.69 0-1.25.56-1.25 1.25S5.06 8.5 5.75 8.5 7 7.94 7 7.25 6.44 6 5.75 6zm14.5.5c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5z"
        fill={color}
      />
    </svg>
  );
};

ListBullet24.category = 'Text Formatting';

export default ListBullet24;
