import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 8.85881e-08 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C6.44277e-08 2.68629 2.68629 0 6 0ZM5.67773 3.5625C5.03246 3.25276 4.25023 3.71822 4.25 4.4668V7.5332C4.25024 8.33164 5.14024 8.80804 5.80469 8.36523L8.10449 6.83203C8.69777 6.43609 8.69703 5.56372 8.10352 5.16797L5.80469 3.63477L5.67773 3.5625Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled12.category = 'Sound & Music';

export default PlayCircleFilled12;
