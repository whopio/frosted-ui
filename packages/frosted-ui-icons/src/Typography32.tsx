import * as React from 'react';
import { IconProps } from './types';

export const Typography32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Typography32"
      {...props}
    >
      <path
        d="M30 1.25c.414 0 .75.336.75.75v4.48c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.75h-12.5v26.5h4.635c.414 0 .75.336.75.75s-.336.75-.75.75H9.538c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.712V2.75H2.75v3.73c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2c0-.414.336-.75.75-.75h28z"
        fill={color}
      />
    </svg>
  );
};

Typography32.category = 'Text Formatting';

export default Typography32;
