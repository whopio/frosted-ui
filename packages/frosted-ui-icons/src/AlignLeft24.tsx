import * as React from 'react';
import { IconProps } from './types';

export const AlignLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AlignLeft24"
      {...props}
    >
      <path
        d="M20 18.25c.414 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h16zm-8-5c.414 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8zm8-5c.414 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h16zm-8-5c.414 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8z"
        fill={color}
      />
    </svg>
  );
};

AlignLeft24.category = 'Text Formatting';

export default AlignLeft24;
