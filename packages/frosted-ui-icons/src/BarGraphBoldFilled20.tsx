import * as React from 'react';
import { IconProps } from './types';

export const BarGraphBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarGraphBoldFilled20"
      {...props}
    >
      <path
        d="M4.5 11c.828 0 1.5.672 1.5 1.5v5c0 .828-.672 1.5-1.5 1.5h-2c-.828 0-1.5-.672-1.5-1.5v-5c0-.828.672-1.5 1.5-1.5h2zM11 1c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5H9c-.828 0-1.5-.672-1.5-1.5v-15C7.5 1.672 8.172 1 9 1h2zm6.5 5c.828 0 1.5.672 1.5 1.5v10c0 .828-.672 1.5-1.5 1.5h-2c-.828 0-1.5-.672-1.5-1.5v-10c0-.828.672-1.5 1.5-1.5h2z"
        fill={color}
      />
    </svg>
  );
};

BarGraphBoldFilled20.category = 'Stats & Charts';

export default BarGraphBoldFilled20;
