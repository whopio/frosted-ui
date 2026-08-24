import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkFilled16"
      {...props}
    >
      <path
        d="M13.411 3.227c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.767l-8.663 8.662c-.234.235-.552.367-.883.367-.332 0-.65-.132-.884-.367L.866 9.773c-.488-.488-.488-1.279 0-1.767s1.28-.488 1.768 0l2.999 2.999 7.778-7.778z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkFilled16.category = 'Checkmarks';

export default CheckmarkFilled16;
