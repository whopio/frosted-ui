import * as React from 'react';
import { IconProps } from './types';

export const BanBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM5.451 15.962C6.713 16.926 8.29 17.5 10 17.5c4.142 0 7.5-3.358 7.5-7.5 0-1.71-.574-3.287-1.538-4.549l-10.51 10.51zM10 2.5c-4.142 0-7.5 3.358-7.5 7.5 0 1.71.573 3.286 1.537 4.548l10.51-10.51C13.288 3.072 11.71 2.5 10 2.5z"
        fill={color}
      />
    </svg>
  );
};

BanBold20.category = 'Interface General';

export default BanBold20;
