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
        d="M9.584 4c1.489 0 2.623 1.334 2.384 2.804l-.513 3.167c-.19 1.17-1.2 2.029-2.386 2.029H2.931C1.746 12 .735 11.14.545 9.97L.032 6.805C-.207 5.334.927 4 2.416 4h7.168zm-.48-2c.863 0 1.585.544 1.87 1.294C10.55 3.106 10.081 3 9.585 3H2.418c-.49 0-.954.102-1.372.286C1.333 2.54 2.054 2 2.913 2h6.191zM7.753 0c.757 0 1.406.419 1.746 1.026C9.369 1.01 9.238 1 9.103 1h-6.19c-.14 0-.276.01-.41.028C2.843.42 3.493 0 4.251 0h3.502z"
        fill={color}
      />
    </svg>
  );
};

CardStackFilled12.category = 'Interface General';

export default CardStackFilled12;
