import * as React from 'react';
import { IconProps } from './types';

export const CardStackFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackFilled12"
      {...props}
    >
      <path
        d="M9.584 4c1.49 0 2.623 1.334 2.385 2.804l-.514 3.167C11.265 11.14 10.255 12 9.07 12H2.93C1.746 12 .736 11.14.546 9.97L.032 6.805C-.206 5.334.928 4 2.417 4h7.167zm-.48-2c.862 0 1.584.544 1.869 1.294C10.55 3.106 10.082 3 9.585 3H2.418c-.49 0-.954.102-1.372.286C1.332 2.54 2.053 2 2.913 2h6.19zm-1.35-2c.757 0 1.405.419 1.745 1.026C9.37 1.01 9.238 1 9.104 1H2.913c-.14 0-.276.01-.41.028C2.844.42 3.494 0 4.253 0h3.501z"
        fill={color}
      />
    </svg>
  );
};

CardStackFilled12.category = 'Interface General';

export default CardStackFilled12;
