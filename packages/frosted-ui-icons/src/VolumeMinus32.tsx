import * as React from 'react';
import { IconProps } from './types';

export const VolumeMinus32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumeMinus32"
      {...props}
    >
      <path
        d="M12.996 2.81C14.928 1.076 18 2.448 18 5.043v21.915c0 2.595-3.072 3.966-5.004 2.233l-5.142-4.615c-.412-.37-.948-.576-1.502-.576H4.75C2.679 24 1 22.321 1 20.25v-8.5C1 9.68 2.679 8 4.75 8h1.602c.554 0 1.09-.205 1.502-.575l5.142-4.615zM16.5 5.043c0-1.297-1.536-1.983-2.502-1.117L8.855 8.541c-.688.618-1.58.96-2.503.96H4.75c-1.243 0-2.25 1.007-2.25 2.25v8.5c0 1.242 1.007 2.25 2.25 2.25h1.602c.924 0 1.815.341 2.503.958l5.143 4.616c.966.866 2.502.18 2.502-1.117V5.043zM30.25 15.25c.414 0 .75.336.75.75s-.336.75-.75.75h-7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeMinus32.category = 'Sound & Music';

export default VolumeMinus32;
