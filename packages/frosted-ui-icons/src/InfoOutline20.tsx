import * as React from 'react';
import { IconProps } from './types';

export const InfoOutline20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoOutline20"
      {...props}
    >
      <path
        d="M11.75 7.5c.414 0 .75.336.75.75V17h.5c.414 0 .75.336.75.75s-.336.75-.75.75H7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H8V9h-.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.25zM9.5 17H11V9H9.5v8zM10 1.5c1.38 0 2.5 1.12 2.5 2.5S11.38 6.5 10 6.5 7.5 5.38 7.5 4 8.62 1.5 10 1.5zM10 3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

InfoOutline20.category = 'Interface General';

export default InfoOutline20;
