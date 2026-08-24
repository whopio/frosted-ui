import * as React from 'react';
import { IconProps } from './types';

export const Italic12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Italic12"
      {...props}
    >
      <path
        d="M9.625 1.125c.414 0 .75.336.75.75s-.336.75-.75.75H7.807L5.76 9.375H7.13c.414 0 .75.336.75.75s-.336.75-.75.75H2.375c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.818l2.046-6.75H4.875c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75z"
        fill={color}
      />
    </svg>
  );
};

Italic12.category = 'Text Formatting';

export default Italic12;
