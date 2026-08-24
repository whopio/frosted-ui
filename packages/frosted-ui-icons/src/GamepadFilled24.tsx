import * as React from 'react';
import { IconProps } from './types';

export const GamepadFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GamepadFilled24"
      {...props}
    >
      <path
        d="M16.535 3.25c3.484 0 6.396 2.652 6.72 6.12l.684 7.28c.206 2.2-1.525 4.1-3.734 4.1H20c-.71 0-1.403-.202-2-.578L17.75 20l-2.4-1.8c-.39-.292-.863-.45-1.35-.45h-4c-.487 0-.96.158-1.35.45L6.25 20c-.649.487-1.439.75-2.25.75h-.206c-2.209 0-3.94-1.9-3.733-4.1l.682-7.28c.325-3.468 3.237-6.12 6.72-6.12h9.073zM15 11.6c-.663 0-1.2.538-1.2 1.2 0 .663.538 1.2 1.2 1.201.663 0 1.2-.538 1.2-1.2 0-.663-.537-1.2-1.2-1.2zM8 8c-.414 0-.75.336-.75.75v1.5h-1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.5v1.5c0 .414.336.75.75.75s.75-.336.75-.75v-1.5h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.5v-1.5C8.75 8.336 8.413 8 8 8zm9.4.001c-.663 0-1.2.537-1.2 1.2 0 .662.537 1.2 1.2 1.2.662 0 1.2-.538 1.2-1.2 0-.663-.538-1.2-1.2-1.2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

GamepadFilled24.category = 'Objects';

export default GamepadFilled24;
