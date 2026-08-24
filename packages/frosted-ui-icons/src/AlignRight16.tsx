import * as React from 'react';
import { IconProps } from './types';

export const AlignRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AlignRight16"
      {...props}
    >
      <path
        d="M13.5 12.77c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H3c-.414 0-.75-.336-.75-.75 0-.415.336-.75.75-.75h10.5zm0-3.698c.414 0 .75.336.75.75 0 .415-.336.75-.75.75H8c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75h5.5zm0-3.696c.414 0 .75.336.75.75s-.336.75-.75.75H3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5zm0-3.697c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H8c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.5z"
        fill={color}
      />
    </svg>
  );
};

AlignRight16.category = 'Text Formatting';

export default AlignRight16;
