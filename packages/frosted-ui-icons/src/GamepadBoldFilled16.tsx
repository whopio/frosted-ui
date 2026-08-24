import * as React from 'react';
import { IconProps } from './types';

export const GamepadBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GamepadBoldFilled16"
      {...props}
    >
      <path
        d="M10.476 2c2.596 0 4.762 1.988 4.982 4.576l.361 4.247c.146 1.71-1.202 3.177-2.918 3.177-.634 0-1.251-.207-1.758-.588l-1.317-.988c-.173-.13-.384-.201-.6-.202H6.777c-.216 0-.428.072-.601.202l-1.317.989c-.507.38-1.124.587-1.758.587-1.716 0-3.064-1.468-2.918-3.177l.361-4.247C.764 3.988 2.929 2 5.526 2h4.95zM5.5 4.75c-.552 0-1 .448-1 1v.5h-.5c-.552 0-1 .448-1 1s.448 1 1 1h.5v.5c0 .552.448 1 1 1s1-.448 1-1v-.5h.5c.552 0 1-.448 1-1s-.448-1-1-1h-.5v-.5c0-.552-.448-1-1-1zm4.25 2.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm2-2c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

GamepadBoldFilled16.category = 'Objects';

export default GamepadBoldFilled16;
