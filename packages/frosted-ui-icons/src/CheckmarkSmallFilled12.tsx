import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallFilled12"
      {...props}
    >
      <path
        d="M8.116 3.366c.488-.488 1.28-.488 1.768 0s.487 1.28 0 1.767l-4 4c-.489.489-1.28.488-1.768 0l-2-2c-.488-.488-.488-1.28 0-1.767.488-.488 1.28-.488 1.768 0L5 6.482l3.116-3.116z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallFilled12.category = 'Checkmarks';

export default CheckmarkSmallFilled12;
