import * as React from 'react';
import { IconProps } from './types';

export const AlignLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AlignLeft16"
      {...props}
    >
      <path
        d="M13.67 12.77c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H2.332c-.414 0-.75-.336-.75-.75 0-.415.336-.75.75-.75H13.67zM8 9.072c.414 0 .75.336.75.75 0 .415-.336.75-.75.75H2.332c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75h5.669zm5.669-3.696c.414 0 .75.336.75.75s-.336.75-.75.75H2.332c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H13.67zM8 1.679c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H2.332c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.669z"
        fill={color}
      />
    </svg>
  );
};

AlignLeft16.category = 'Text Formatting';

export default AlignLeft16;
