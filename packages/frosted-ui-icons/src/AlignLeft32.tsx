import * as React from 'react';
import { IconProps } from './types';

export const AlignLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AlignLeft32"
      {...props}
    >
      <path
        d="M28 26.25c.414 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h24zm-11-8c.414 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h13zm11-7c.414 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h24zm-11-8c.414 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h13z"
        fill={color}
      />
    </svg>
  );
};

AlignLeft32.category = 'Text Formatting';

export default AlignLeft32;
