import * as React from 'react';
import { IconProps } from './types';

export const TrashFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrashFilled16"
      {...props}
    >
      <path
        d="M13.627 6c.45 0 .8.395.744.843l-.85 6.835h-.002C13.413 14.989 12.32 16 11 16H5c-1.319 0-2.413-1.013-2.52-2.322l-.851-6.835C1.573 6.395 1.922 6 2.373 6h11.254zM8.688 0c1.262 0 2.362.859 2.668 2.083l.23.917h3.664c.414 0 .75.336.75.75s-.336.75-.75.75H.75C.336 4.5 0 4.164 0 3.75S.336 3 .75 3h3.664l.23-.917C4.95.859 6.05 0 7.312 0h1.376zM7.312 1.5c-.574 0-1.074.39-1.213.947L5.96 3h4.08l-.139-.553c-.139-.556-.639-.947-1.213-.947H7.312z"
        fill={color}
      />
    </svg>
  );
};

TrashFilled16.category = 'Interface General';

export default TrashFilled16;
