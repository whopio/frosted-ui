import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.85763 20.1309C4.92731 19.0505 5.69487 17.3766 7.12058 17.3766H10.6667V5.04329C10.6667 3.75463 11.7114 2.70996 13.0001 2.70996H19C20.2887 2.70996 21.3334 3.75464 21.3334 5.04329V17.3766H24.8795C26.3052 17.3766 27.0728 19.0505 26.1424 20.1309L17.7682 29.8558C16.8372 30.9369 15.1628 30.9369 14.2319 29.8558L5.85763 20.1309Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowFatDownFilled32;
