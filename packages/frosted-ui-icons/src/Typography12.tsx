import * as React from 'react';
import { IconProps } from './types';

export const Typography12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Typography12"
      {...props}
    >
      <path
        d="M10 1.25c.414 0 .75.336.75.75v1.28c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.53h-2.5v6.5h.788c.414 0 .75.336.75.75s-.336.75-.75.75H4.154c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H5.25v-6.5h-2.5v.53c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2c0-.414.336-.75.75-.75h8z"
        fill={color}
      />
    </svg>
  );
};

Typography12.category = 'Text Formatting';

export default Typography12;
