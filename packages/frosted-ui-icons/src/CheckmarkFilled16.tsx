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
        d="M13.411 3.227c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.767l-8.662 8.663c-.235.234-.553.366-.884.366-.332 0-.65-.132-.884-.367L.866 9.774c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0l2.999 3 7.778-7.78z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkFilled16.category = 'Checkmarks';

export default CheckmarkFilled16;
