import * as React from 'react';
import { IconProps } from './types';

export const AlignLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AlignLeft12"
      {...props}
    >
      <path
        d="M10 9.25c.414 0 .75.336.75.75s-.336.75-.75.75H2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8zM6 6.604c.414 0 .75.336.75.75 0 .415-.336.75-.75.75H2c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75h4zm4-2.645c.414 0 .75.336.75.75s-.336.75-.75.75H2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8zM5.5 1.312c.414 0 .75.336.75.75 0 .415-.336.75-.75.75H2c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75h3.5z"
        fill={color}
      />
    </svg>
  );
};

AlignLeft12.category = 'Text Formatting';

export default AlignLeft12;
