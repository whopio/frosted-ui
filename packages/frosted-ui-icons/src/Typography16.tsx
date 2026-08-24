import * as React from 'react';
import { IconProps } from './types';

export const Typography16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Typography16"
      {...props}
    >
      <path
        d="M14 1.25c.414 0 .75.336.75.75v1.92c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.75h-4.5v10.5h1.558c.414 0 .75.336.75.75s-.336.75-.75.75H5.23c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.02V2.75h-4.5v1.17c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2c0-.414.336-.75.75-.75h12z"
        fill={color}
      />
    </svg>
  );
};

Typography16.category = 'Text Formatting';

export default Typography16;
