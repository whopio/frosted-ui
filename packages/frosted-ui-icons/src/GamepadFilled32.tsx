import * as React from 'react';
import { IconProps } from './types';

export const GamepadFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GamepadFilled32"
      {...props}
    >
      <path
        d="M21.896 4.75c4.432 0 8.165 3.315 8.689 7.716l1.127 9.473c.336 2.825-1.87 5.31-4.716 5.311h-.262c-.954 0-1.887-.288-2.676-.825l-3.462-2.36c-.539-.368-1.177-.565-1.83-.565h-5.532c-.653 0-1.291.197-1.83.564l-3.462 2.36c-.788.538-1.721.826-2.676.826h-.261c-2.846 0-5.054-2.485-4.717-5.311l1.128-9.473C1.94 8.065 5.672 4.75 10.104 4.75h11.792zm-11.396 6c-.414 0-.75.336-.75.75v2.25H7.5c-.414 0-.75.336-.75.75s.336.75.75.75h2.25v2.25c0 .414.336.75.75.75s.75-.336.75-.75v-2.25h2.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-2.25V11.5c0-.414-.336-.75-.75-.75zm9.25 4.75c-.69 0-1.251.56-1.251 1.25s.56 1.25 1.25 1.25S21 17.44 21 16.75s-.56-1.25-1.25-1.25zm3.1-4.501c-.69 0-1.25.56-1.25 1.251 0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25-.56-1.25-1.25-1.251z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

GamepadFilled32.category = 'Objects';

export default GamepadFilled32;
