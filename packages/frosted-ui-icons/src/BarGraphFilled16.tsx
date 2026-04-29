import * as React from 'react';
import { IconProps } from './types';

export const BarGraphFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4 10C4.55228 10 5 10.4477 5 11V14C5 14.5523 4.55228 15 4 15H2C1.44772 15 1 14.5523 1 14V11C1 10.4477 1.44772 10 2 10H4ZM9 1C9.55228 1 10 1.44772 10 2V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V2C6 1.44772 6.44772 1 7 1H9ZM14 6C14.5523 6 15 6.44772 15 7V14C15 14.5523 14.5523 15 14 15H12C11.4477 15 11 14.5523 11 14V7C11 6.44772 11.4477 6 12 6H14Z"
        fill={color}
      />
    </svg>
  );
};

BarGraphFilled16.category = 'Stats & Charts';

export default BarGraphFilled16;
