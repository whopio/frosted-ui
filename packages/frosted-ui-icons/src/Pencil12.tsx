import * as React from 'react';
import { IconProps } from './types';

export const Pencil12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pencil12"
      {...props}
    >
      <path
        d="M9.062 0c.718 0 1.408.286 1.917.794l.226.227c.508.508.794 1.198.794 1.917 0 .718-.286 1.408-.794 1.916L4.78 11.28c-.114.115-.263.19-.424.212l-3.5.5c-.233.033-.47-.045-.636-.212-.167-.167-.246-.403-.212-.636l.5-3.5c.023-.16.097-.31.212-.424L7.145.794C7.653.286 8.343 0 9.062 0zM1.955 8.104l-.323 2.262 2.263-.323L8.188 5.75 6.25 3.81 1.955 8.105zM9.062 1.5c-.321 0-.63.128-.857.354l-.895.896 1.939 1.94.896-.896c.227-.227.354-.535.354-.857 0-.32-.128-.629-.354-.856l-.227-.227c-.227-.226-.535-.354-.856-.354z"
        fill={color}
      />
    </svg>
  );
};

Pencil12.category = 'Objects';

export default Pencil12;
