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
        d="M8.117 3.366c.488-.488 1.279-.488 1.767 0s.488 1.28 0 1.767l-4 4c-.488.489-1.28.488-1.767 0l-2-2c-.488-.488-.489-1.28 0-1.767.488-.488 1.279-.488 1.767 0L5 6.482l3.117-3.116z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled12.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled12;
