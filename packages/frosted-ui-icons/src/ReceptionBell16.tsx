import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBell16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBell16"
      {...props}
    >
      <path
        d="M10.32 1c.414 0 .75.336.75.75s-.336.75-.75.75H8.75v.775c2.342.15 3.91 1.01 4.887 2.383 1.036 1.458 1.305 3.358 1.354 5.154.022.805-.632 1.438-1.408 1.438H8.75v1.25h4.5c.414 0 .75.336.75.75s-.336.75-.75.75H2.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5v-1.25H2.417c-.776 0-1.43-.633-1.408-1.438l.03-.677c.099-1.587.417-3.202 1.324-4.477.977-1.373 2.545-2.233 4.887-2.383V2.5H5.68c-.414 0-.75-.336-.75-.75S5.266 1 5.68 1h4.64zM8 4.75c-2.413 0-3.689.758-4.414 1.777-.75 1.055-1.017 2.533-1.072 4.223h10.972c-.055-1.69-.322-3.168-1.072-4.223-.725-1.019-2-1.777-4.414-1.777z"
        fill={color}
      />
    </svg>
  );
};

ReceptionBell16.category = 'Objects';

export default ReceptionBell16;
