import * as React from 'react';
import { IconProps } from './types';

export const GamepadBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GamepadBoldFilled12"
      {...props}
    >
      <path
        d="M7.513 1c2.063 0 3.788 1.57 3.982 3.624l.352 3.723C11.98 9.77 10.862 11 9.433 11c-.657 0-1.287-.266-1.743-.738l-.553-.571c-.094-.098-.224-.153-.36-.153H5.22c-.135 0-.265.055-.36.153l-.552.57c-.457.473-1.087.74-1.743.74C1.134 11 .015 9.77.15 8.346L.5 4.624C.695 2.57 2.421 1 4.484 1h3.029zM4.25 4.25C3.56 4.25 3 4.81 3 5.5s.56 1.25 1.25 1.25S5.5 6.19 5.5 5.5s-.56-1.25-1.25-1.25zm3.5 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25S9 6.19 9 5.5s-.56-1.25-1.25-1.25z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

GamepadBoldFilled12.category = 'Objects';

export default GamepadBoldFilled12;
