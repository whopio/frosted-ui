import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhone16"
      {...props}
    >
      <path
        d="M9.5 1C11.433 1 13 2.567 13 4.5v7c0 1.933-1.567 3.5-3.5 3.5h-3C4.567 15 3 13.433 3 11.5v-7C3 2.567 4.567 1 6.5 1h3zm-3 1.5c-1.105 0-2 .895-2 2v7c0 1.105.895 2 2 2h3c1.105 0 2-.895 2-2v-7c0-1.105-.895-2-2-2h-3zm3 8.5c.414 0 .75.336.75.75s-.336.75-.75.75h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3z"
        fill={color}
      />
    </svg>
  );
};

MobilePhone16.category = 'Objects';

export default MobilePhone16;
