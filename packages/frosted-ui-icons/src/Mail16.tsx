import * as React from 'react';
import { IconProps } from './types';

export const Mail16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Mail16"
      {...props}
    >
      <path
        d="M11.5 2C13.433 2 15 3.567 15 5.5v5c0 1.933-1.567 3.5-3.5 3.5h-7C2.567 14 1 12.433 1 10.5v-5C1 3.567 2.567 2 4.5 2h7zM8.758 8.923c-.49.185-1.03.185-1.52 0L2.5 7.132V10.5c0 1.105.895 2 2 2h7c1.104 0 2-.896 2-2V7.13L8.758 8.923zM4.5 3.5c-1.105 0-2 .895-2 2v.028l5.268 1.993c.147.055.312.055.46 0L13.5 5.526V5.5c0-1.104-.896-2-2-2h-7z"
        fill={color}
      />
    </svg>
  );
};

Mail16.category = 'Communication';

export default Mail16;
