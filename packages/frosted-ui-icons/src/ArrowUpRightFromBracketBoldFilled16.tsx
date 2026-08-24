import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBoldFilled16"
      {...props}
    >
      <path
        d="M13.5 8.25c.828 0 1.5.671 1.5 1.5v.75c0 2.485-2.015 4.5-4.5 4.5h-5C3.015 15 1 12.985 1 10.5v-.75c0-.829.672-1.5 1.5-1.5S4 8.92 4 9.75v.75c0 .828.672 1.5 1.5 1.5h5c.828 0 1.5-.672 1.5-1.5v-.75c0-.829.672-1.5 1.5-1.5zM9.94 1.44c.585-.587 1.535-.587 2.12 0l2 2c.586.585.586 1.534 0 2.12l-2 2c-.585.586-1.535.586-2.12 0-.405-.405-.53-.983-.376-1.496C8.948 6.251 8.5 6.823 8.5 7.5v2c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-2c0-2.348 1.798-4.276 4.093-4.482-.196-.532-.08-1.152.346-1.579z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBoldFilled16.category = 'Arrows';

export default ArrowUpRightFromBracketBoldFilled16;
