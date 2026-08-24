import * as React from 'react';
import { IconProps } from './types';

export const Italic24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Italic24"
      {...props}
    >
      <path
        d="M19.25 3c.414 0 .75.336.75.75s-.336.75-.75.75h-4.193l-4.546 15h3.749c.414 0 .75.336.75.75s-.336.75-.75.75H4.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.193l4.546-15H9.75c-.414 0-.75-.336-.75-.75S9.336 3 9.75 3h9.5z"
        fill={color}
      />
    </svg>
  );
};

Italic24.category = 'Text Formatting';

export default Italic24;
