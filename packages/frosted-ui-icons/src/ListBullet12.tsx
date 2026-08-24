import * as React from 'react';
import { IconProps } from './types';

export const ListBullet12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListBullet12"
      {...props}
    >
      <path
        d="M2.63 7.375c.553 0 1 .448 1 1s-.447 1-1 1c-.551 0-1-.448-1-1s.449-1 1-1zm7.25.25c.415 0 .75.336.75.75s-.335.75-.75.75H5.63c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h4.25zm-7.25-5c.553 0 1 .448 1 1s-.447 1-1 1c-.551 0-1-.448-1-1s.449-1 1-1zm7.25.25c.415 0 .75.336.75.75s-.335.75-.75.75H5.63c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h4.25z"
        fill={color}
      />
    </svg>
  );
};

ListBullet12.category = 'Text Formatting';

export default ListBullet12;
