import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircleFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM5.25 7.219c-.414 0-.75.336-.75.75s.336.75.75.75h5.438c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.25z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleFilled16.category = 'Interface General';

export default MinusCircleFilled16;
