import * as React from 'react';
import { IconProps } from './types';

export const K32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="K32"
      {...props}
    >
      <path
        d="M22.72 3.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L12.06 16l11.72 11.72c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L11 17.06l-2.25 2.25v8.94c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.75c0-.414.336-.75.75-.75s.75.336.75.75v13.44L22.72 3.22z"
        fill={color}
      />
    </svg>
  );
};

K32.category = 'Text Formatting';

export default K32;
