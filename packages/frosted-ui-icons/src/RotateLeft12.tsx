import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateLeft12"
      {...props}
    >
      <path
        d="M6 0c2.612 0 4.833 1.669 5.657 3.996C11.88 4.624 12 5.3 12 6c0 .701-.12 1.376-.343 2.004C10.833 10.33 8.612 12 6 12S1.167 10.331.343 8.004c-.139-.39.066-.82.457-.958.39-.138.819.067.957.457C2.376 9.25 4.043 10.5 6 10.5c1.957 0 3.624-1.25 4.243-2.997.166-.469.257-.975.257-1.503 0-.528-.09-1.034-.257-1.503C9.624 2.75 7.957 1.5 6 1.5c-1.559 0-2.931.794-3.74 2h1.49c.414 0 .75.336.75.75S4.164 5 3.75 5h-3C.336 5 0 4.664 0 4.25v-3C0 .836.336.5.75.5s.75.336.75.75v.781C2.6.786 4.207 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

RotateLeft12.category = 'Arrows';

export default RotateLeft12;
