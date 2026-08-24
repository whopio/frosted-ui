import * as React from 'react';
import { IconProps } from './types';

export const Underline24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Underline24"
      {...props}
    >
      <path
        d="M18.25 20c.414 0 .75.336.75.75s-.336.75-.75.75H5.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12.5zm0-17c.414 0 .75.336.75.75V12c0 3.866-3.134 7-7 7s-7-3.134-7-7V3.75c0-.414.336-.75.75-.75s.75.336.75.75V12c0 3.038 2.462 5.5 5.5 5.5s5.5-2.462 5.5-5.5V3.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Underline24.category = 'Text Formatting';

export default Underline24;
