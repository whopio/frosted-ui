import * as React from 'react';
import { IconProps } from './types';

export const FullScreen12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FullScreen12"
      {...props}
    >
      <path
        d="M1.5 7.206c.414 0 .75.336.75.75v.294c0 .828.672 1.5 1.5 1.5h.45c.414 0 .75.336.75.75s-.336.75-.75.75h-.45c-1.657 0-3-1.343-3-3v-.294c0-.414.336-.75.75-.75zm9 0c.414 0 .75.336.75.75v.294c0 1.657-1.343 3-3 3H7.8c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.45c.828 0 1.5-.672 1.5-1.5v-.294c0-.414.336-.75.75-.75zM4.2.75c.414 0 .75.336.75.75s-.336.75-.75.75h-.45c-.828 0-1.5.672-1.5 1.5v.294c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.75c0-1.657 1.343-3 3-3h.45zm4.05 0c1.657 0 3 1.343 3 3v.294c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.75c0-.828-.672-1.5-1.5-1.5H7.8c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.45z"
        fill={color}
      />
    </svg>
  );
};

FullScreen12.category = 'Interface General';

export default FullScreen12;
