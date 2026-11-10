import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBoldFilled12"
      {...props}
    >
      <path
        d="M8.117 3.365c.488-.487 1.28-.487 1.767 0 .488.488.488 1.28 0 1.769l-4 4c-.488.488-1.28.488-1.768 0l-2-2c-.487-.488-.487-1.28 0-1.768.489-.488 1.28-.488 1.768 0L5 6.482l3.117-3.117z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled12.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled12;
