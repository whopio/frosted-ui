import * as React from 'react';
import { IconProps } from './types';

export const Banknote12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Banknote12"
      {...props}
    >
      <path
        d="M9.25 1C10.769 1 12 2.231 12 3.75v4.5C12 9.769 10.769 11 9.25 11h-6.5C1.231 11 0 9.769 0 8.25v-4.5C0 2.231 1.231 1 2.75 1h6.5zm-6.5 1.5c-.69 0-1.25.56-1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25h-6.5zM9 7.25c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zM6 4c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm0 1.5c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5zM3 3.25c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Banknote12.category = 'Money & Shopping';

export default Banknote12;
