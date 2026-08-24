import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBellFilled16"
      {...props}
    >
      <path
        d="M10.32 1c.414 0 .75.336.75.75s-.336.75-.75.75H8.75v.775c2.341.15 3.91 1.01 4.886 2.383 1.037 1.458 1.306 3.358 1.355 5.154.022.805-.632 1.438-1.408 1.438H8.75v1.25h4.5c.414 0 .75.336.75.75s-.336.75-.75.75H2.75c-.415 0-.75-.336-.75-.75s.335-.75.75-.75h4.5v-1.25H2.417c-.777 0-1.43-.633-1.409-1.438l.03-.677c.1-1.587.418-3.202 1.325-4.477.977-1.373 2.545-2.233 4.887-2.383V2.5H5.68c-.415 0-.75-.336-.75-.75S5.264 1 5.68 1h4.64z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellFilled16.category = 'Objects';

export default ReceptionBellFilled16;
