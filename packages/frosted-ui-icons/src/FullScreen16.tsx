import * as React from 'react';
import { IconProps } from './types';

export const FullScreen16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FullScreen16"
      {...props}
    >
      <path
        d="M2 9.858c.414 0 .75.336.75.75V11c0 1.243 1.007 2.25 2.25 2.25h.6c.414 0 .75.336.75.75s-.336.75-.75.75H5c-2.071 0-3.75-1.679-3.75-3.75v-.392c0-.414.336-.75.75-.75zm12 0c.414 0 .75.336.75.75V11c0 2.071-1.679 3.75-3.75 3.75h-.6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.6c1.243 0 2.25-1.007 2.25-2.25v-.392c0-.414.336-.75.75-.75zM5.6 1.25c.414 0 .75.336.75.75s-.336.75-.75.75H5C3.757 2.75 2.75 3.757 2.75 5v.392c0 .414-.336.75-.75.75s-.75-.336-.75-.75V5c0-2.071 1.679-3.75 3.75-3.75h.6zm5.4 0c2.071 0 3.75 1.679 3.75 3.75v.392c0 .414-.336.75-.75.75s-.75-.336-.75-.75V5c0-1.243-1.007-2.25-2.25-2.25h-.6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.6z"
        fill={color}
      />
    </svg>
  );
};

FullScreen16.category = 'Interface General';

export default FullScreen16;
