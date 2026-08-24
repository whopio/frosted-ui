import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquareBold16"
      {...props}
    >
      <path
        d="M6 2c.552 0 1 .448 1 1s-.448 1-1 1H5c-1.105 0-2 .895-2 2v5c0 1.105.895 2 2 2h5c1.105 0 2-.895 2-2v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 2.21-1.79 4-4 4H5c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4h1zm8-1c.552 0 1 .448 1 1v4.25c0 .552-.448 1-1 1s-1-.448-1-1V4.414L8.707 8.707c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L11.586 3H9.75c-.552 0-1-.448-1-1s.448-1 1-1H14z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareBold16.category = 'Arrows';

export default ArrowUpRightFromSquareBold16;
