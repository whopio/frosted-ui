import * as React from 'react';
import { IconProps } from './types';

export const GamepadBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GamepadBoldFilled32"
      {...props}
    >
      <path
        d="M21.45 5c4.572 0 8.418 3.428 8.942 7.97l1.09 9.47c.342 2.962-1.974 5.56-4.956 5.56-1.08 0-2.132-.352-2.997-1l-3.19-2.398c-.52-.39-1.153-.602-1.803-.602h-5.07c-.65 0-1.283.211-1.803.602l-3.19 2.397C7.609 27.65 6.557 28 5.476 28 2.495 28 .179 25.402.52 22.44l1.091-9.47C2.135 8.428 5.981 5 10.551 5h10.9zM10.5 10.5c-.553 0-1 .448-1 1v2h-2c-.553 0-1 .448-1 1s.447 1 1 1h2v2c0 .552.447 1 1 1 .552 0 1-.448 1-1v-2h2c.552 0 1-.448 1-1s-.448-1-1-1h-2v-2c0-.552-.448-1-1-1zm9.25 5c-.69 0-1.252.56-1.252 1.25S19.06 18 19.75 18c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25zm3.099-4.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

GamepadBoldFilled32.category = 'Objects';

export default GamepadBoldFilled32;
