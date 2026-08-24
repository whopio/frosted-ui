import * as React from 'react';
import { IconProps } from './types';

export const VolumePlus32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumePlus32"
      {...props}
    >
      <path
        d="M12.996 2.81C14.928 1.075 18 2.447 18 5.042v21.915c0 2.595-3.072 3.966-5.004 2.232l-5.142-4.615c-.412-.37-.948-.575-1.502-.575H4.75C2.679 24 1 22.32 1 20.25v-8.5C1 9.679 2.679 8 4.75 8h1.602c.554 0 1.09-.205 1.502-.575l5.142-4.616zM16.5 5.042c0-1.298-1.536-1.984-2.502-1.117L8.855 8.54c-.688.617-1.58.959-2.503.959H4.75c-1.243 0-2.25 1.007-2.25 2.25v8.5c0 1.242 1.007 2.25 2.25 2.25h1.602c.924 0 1.816.341 2.503.959l5.143 4.615c.966.867 2.502.181 2.502-1.116V5.043zm9.75 6.207c.414 0 .75.336.75.75v3.25h3.25c.414 0 .75.336.75.75s-.336.75-.75.75H27V20c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.25h-3.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.25V12c0-.414.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumePlus32.category = 'Sound & Music';

export default VolumePlus32;
