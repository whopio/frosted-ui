import * as React from 'react';
import { IconProps } from './types';

export const FolderAdd32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FolderAdd32"
      {...props}
    >
      <path
        d="M8.93 4c.843 0 1.628.424 2.09 1.128l1.588 2.42c.185.282.5.452.836.452H28.25C29.769 8 31 9.231 31 10.75v6.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.5c0-.69-.56-1.25-1.25-1.25H13.444c-.842 0-1.627-.424-2.09-1.128l-1.587-2.42c-.185-.282-.5-.452-.836-.452H3.75c-.69 0-1.25.56-1.25 1.25v18.5c0 .69.56 1.25 1.25 1.25h16.5c.414 0 .75.336.75.75s-.336.75-.75.75H3.75C2.231 28 1 26.769 1 25.25V6.75C1 5.231 2.231 4 3.75 4h5.18zM26 18c.414 0 .75.336.75.75v3.5h3.5c.414 0 .75.336.75.75s-.336.75-.75.75h-3.5v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5v-3.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

FolderAdd32.category = 'Interface General';

export default FolderAdd32;
