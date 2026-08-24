import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBold32"
      {...props}
    >
      <path
        d="M2 4.75c-.552 0-1 .448-1 1V17.5C1 19.433 2.567 21 4.5 21h23.018l-4.711 4.53c-.398.382-.41 1.015-.028 1.413.383.398 1.016.41 1.414.028l6.5-6.25c.196-.189.307-.45.307-.721 0-.272-.11-.532-.307-.72l-6.5-6.25c-.398-.383-1.03-.371-1.414.027-.382.398-.37 1.03.028 1.414L27.517 19H4.5c-.828 0-1.5-.672-1.5-1.5V5.75c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightBold32.category = 'Arrows';

export default ArrowDownAngleRightBold32;
