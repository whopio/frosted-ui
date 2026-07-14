import * as React from 'react';
import { IconProps } from './types';

export const BulbBlankFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.999 29.498C21.4132 29.498 21.749 29.8339 21.749 30.248C21.749 30.6623 21.4132 30.998 20.999 30.998H10.999C10.5849 30.998 10.249 30.6622 10.249 30.248C10.2491 29.8339 10.5849 29.4981 10.999 29.498H20.999ZM16.002 1C22.4913 1 27.7518 6.26076 27.752 12.75C27.7519 16.3676 26.1154 19.603 23.5459 21.7568C22.8963 22.3014 22.5 23.02 22.5 23.75C22.4999 25.5449 21.0449 27 19.25 27H12.75C10.9551 27 9.50007 25.5449 9.5 23.75C9.5 23.0181 9.10295 22.2973 8.45215 21.751C5.88632 19.5972 4.25199 16.3646 4.25195 12.75C4.25206 6.26079 9.51271 1.00006 16.002 1Z"
        fill={color}
      />
    </svg>
  );
};

BulbBlankFilled32.category = 'Objects';

export default BulbBlankFilled32;
