import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusCircleBoldFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm0 8.25c-.552 0-1 .448-1 1V15H9.75c-.552 0-1 .448-1 1s.448 1 1 1H15v5.25c0 .552.448 1 1 1s1-.448 1-1V17h5.25c.552 0 1-.448 1-1s-.448-1-1-1H17V9.75c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBoldFilled32.category = 'Interface General';

export default PlusCircleBoldFilled32;
