import * as React from 'react';
import { IconProps } from './types';

export const Underline12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Underline12"
      {...props}
    >
      <path
        d="M9.125 9.625c.414 0 .75.336.75.75s-.336.75-.75.75h-6.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.25zm0-8.719c.414 0 .75.336.75.75V5C9.875 7.14 8.14 8.875 6 8.875 3.86 8.875 2.125 7.14 2.125 5V1.656c0-.414.336-.75.75-.75s.75.336.75.75V5c0 1.312 1.063 2.375 2.375 2.375S8.375 6.312 8.375 5V1.656c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Underline12.category = 'Text Formatting';

export default Underline12;
