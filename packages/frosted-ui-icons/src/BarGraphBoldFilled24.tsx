import * as React from 'react';
import { IconProps } from './types';

export const BarGraphBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarGraphBoldFilled24"
      {...props}
    >
      <path
        d="M5.5 12c1.105 0 2 .895 2 2v7c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2v-7c0-1.105.895-2 2-2h2.5zm7.75-11c1.105 0 2 .895 2 2v18c0 1.105-.895 2-2 2h-2.5c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h2.5zM21 7c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2h-2.5c-1.105 0-2-.895-2-2V9c0-1.105.895-2 2-2H21z"
        fill={color}
      />
    </svg>
  );
};

BarGraphBoldFilled24.category = 'Stats & Charts';

export default BarGraphBoldFilled24;
