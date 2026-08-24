import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlus20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BlankNotePlus20"
      {...props}
    >
      <path
        d="M14.65 0C17.605 0 20 2.395 20 5.35v7.275c0 .414-.336.75-.75.75s-.75-.336-.75-.75V5.35c0-2.126-1.724-3.85-3.85-3.85h-9.3C3.224 1.5 1.5 3.224 1.5 5.35v9.3c0 2.126 1.724 3.85 3.85 3.85h7.275c.414 0 .75.336.75.75s-.336.75-.75.75H5.35C2.395 20 0 17.605 0 14.65v-9.3C0 2.395 2.395 0 5.35 0h9.3zm2.1 13.5c.414 0 .75.336.75.75V16h1.75c.414 0 .75.336.75.75s-.336.75-.75.75H17.5v1.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V17.5h-1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H16v-1.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BlankNotePlus20.category = 'Interface General';

export default BlankNotePlus20;
