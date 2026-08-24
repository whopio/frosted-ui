import * as React from 'react';
import { IconProps } from './types';

export const Italic32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Italic32"
      {...props}
    >
      <path
        d="M25.665 4.25c.414 0 .75.336.75.75s-.336.75-.75.75h-5.776l-6.213 20.5h5.336c.414 0 .75.336.75.75s-.336.75-.75.75H6.332c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.776l6.213-20.5H13c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12.666z"
        fill={color}
      />
    </svg>
  );
};

Italic32.category = 'Text Formatting';

export default Italic32;
