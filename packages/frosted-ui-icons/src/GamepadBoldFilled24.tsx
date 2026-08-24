import * as React from 'react';
import { IconProps } from './types';

export const GamepadBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GamepadBoldFilled24"
      {...props}
    >
      <path
        d="M16.079 3c3.623 0 6.648 2.766 6.971 6.375l.654 7.277c.21 2.335-1.631 4.347-3.976 4.348-.893 0-1.76-.3-2.463-.851l-2.198-1.724c-.352-.275-.786-.425-1.233-.425h-3.668c-.447 0-.882.15-1.234.425L6.734 20.15c-.703.55-1.57.85-2.463.85-2.345 0-4.185-2.011-3.975-4.347l.653-7.277C1.273 5.765 4.297 3 7.92 3h8.158zm-8.08 4.75c-.552 0-1 .447-1 1V10H5.75c-.552 0-1 .447-1 1 0 .552.448 1 1 1H7v1.25c0 .552.448 1 1 1 .553 0 1-.448 1-1V12h1.25c.553 0 1-.448 1-1s-.447-1-1-1H9V8.75c0-.552-.447-1-1-1zm7 3.85c-.663 0-1.2.538-1.2 1.2 0 .663.537 1.2 1.2 1.2.662 0 1.2-.537 1.2-1.2 0-.662-.538-1.2-1.2-1.2zm2.4-3.6c-.663 0-1.2.537-1.2 1.2 0 .662.536 1.2 1.2 1.2.662 0 1.2-.538 1.2-1.2 0-.663-.538-1.2-1.2-1.2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

GamepadBoldFilled24.category = 'Objects';

export default GamepadBoldFilled24;
