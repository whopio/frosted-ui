import * as React from 'react';
import { IconProps } from './types';

export const PlayCircle12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 0C9.31371 8.85881e-08 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C6.44277e-08 2.68629 2.68629 0 6 0ZM6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM4.25 4.4668C4.25023 3.71822 5.03246 3.25276 5.67773 3.5625L5.80469 3.63477L8.10352 5.16797C8.69703 5.56372 8.69777 6.43609 8.10449 6.83203L5.80469 8.36523C5.14024 8.80804 4.25024 8.33164 4.25 7.5332V4.4668ZM5.75 6.59863L6.64746 6L5.75 5.40039V6.59863Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircle12.category = 'Sound & Music';

export default PlayCircle12;
