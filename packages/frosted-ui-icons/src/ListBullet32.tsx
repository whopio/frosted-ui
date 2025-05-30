import * as React from 'react';
import { IconProps } from './types';

export const ListBullet32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M15.6667 22.3333H27M15.6667 9.66667H27M10.3333 9.66667C10.3333 11.1394 9.13943 12.3333 7.66667 12.3333C6.19391 12.3333 5 11.1394 5 9.66667C5 8.19391 6.19391 7 7.66667 7C9.13943 7 10.3333 8.19391 10.3333 9.66667ZM10.3333 22.3333C10.3333 23.8061 9.13943 25 7.66667 25C6.19391 25 5 23.8061 5 22.3333C5 20.8605 6.19391 19.6667 7.66667 19.6667C9.13943 19.6667 10.3333 20.8605 10.3333 22.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListBullet32;
