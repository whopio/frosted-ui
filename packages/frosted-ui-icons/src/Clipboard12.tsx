import * as React from 'react';
import { IconProps } from './types';

export const Clipboard12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Clipboard12"
      {...props}
    >
      <path
        d="M7.499 0c.69 0 1.251.559 1.251 1.25v.25C9.993 1.5 11 2.507 11 3.75v6C11 10.993 9.993 12 8.75 12h-5.5C2.007 12 1 10.993 1 9.75v-6C1 2.507 2.007 1.5 3.25 1.5v-.25C3.25.559 3.812 0 4.501 0h2.998zM3.25 3c-.414 0-.75.336-.75.75v6c0 .414.336.75.75.75h5.5c.414 0 .75-.336.75-.75v-6c0-.414-.336-.75-.75-.75h-.025c-.116.57-.62 1-1.225 1h-3c-.605 0-1.109-.43-1.225-1H3.25zm3 4.5c.414 0 .75.336.75.75S6.664 9 6.25 9h-1.5C4.336 9 4 8.664 4 8.25s.336-.75.75-.75h1.5zm1-2.5c.414 0 .75.336.75.75s-.336.75-.75.75h-2.5c-.414 0-.75-.336-.75-.75S4.336 5 4.75 5h2.5zm-2.5-2.5h2.5v-1h-2.5v1z"
        fill={color}
      />
    </svg>
  );
};

Clipboard12.category = 'Interface General';

export default Clipboard12;
