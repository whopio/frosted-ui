import * as React from 'react';
import { IconProps } from './types';

export const SadBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SadBoldFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.152 0 9.5 4.348 9.5 9.5s-4.348 9.5-9.5 9.5S.5 15.152.5 10 4.848.5 10 .5zM10 12c-2.193 0-3.444 1.19-3.983 1.89-.337.438-.255 1.066.183 1.403.438.336 1.066.254 1.403-.184C7.905 14.716 8.629 14 10 14c1.37 0 2.096.716 2.398 1.11.337.437.965.52 1.403.183.437-.337.52-.965.183-1.402C13.445 13.19 12.193 12 10 12zM6.5 7.875c-.76 0-1.375.616-1.375 1.375 0 .76.616 1.375 1.375 1.375.76 0 1.375-.616 1.375-1.375 0-.76-.616-1.375-1.375-1.375zm7 0c-.76 0-1.375.616-1.375 1.375 0 .76.616 1.375 1.375 1.375.76 0 1.375-.616 1.375-1.375 0-.76-.616-1.375-1.375-1.375z"
        fill={color}
      />
    </svg>
  );
};

SadBoldFilled20.category = 'Emoji & Faces';

export default SadBoldFilled20;
