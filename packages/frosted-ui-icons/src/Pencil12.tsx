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
        d="M9.062 0c.72 0 1.409.286 1.917.794l.227.227c.508.508.794 1.198.794 1.917 0 .718-.286 1.408-.794 1.916L4.78 11.28c-.115.115-.263.19-.424.212l-3.5.5c-.233.034-.47-.045-.637-.212-.166-.167-.245-.403-.211-.636l.5-3.5c.023-.16.097-.31.211-.424L7.145.794C7.654.286 8.343 0 9.062 0zM1.956 8.104l-.323 2.262 2.262-.323L8.19 5.75 6.25 3.81 1.957 8.105zM9.062 1.5c-.32 0-.629.128-.856.354l-.896.896 1.94 1.94.895-.896c.227-.227.355-.535.355-.857 0-.32-.128-.629-.355-.856l-.226-.227c-.227-.226-.536-.354-.857-.354z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pencil12.category = 'Objects';

export default Pencil12;
