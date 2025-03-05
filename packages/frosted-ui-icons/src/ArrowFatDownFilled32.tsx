import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M5.85751 20.1309C4.92719 19.0505 5.69475 17.3767 7.12046 17.3767H10.6666V5.04336C10.6666 3.75469 11.7113 2.71002 12.9999 2.71002H18.9999C20.2886 2.71002 21.3332 3.7547 21.3332 5.04336V17.3767H24.8794C26.3051 17.3767 27.0727 19.0505 26.1423 20.1309L17.768 29.8559C16.8371 30.9369 15.1627 30.9369 14.2318 29.8559L5.85751 20.1309Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowFatDownFilled32;
