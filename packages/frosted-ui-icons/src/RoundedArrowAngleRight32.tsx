import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.5022 30.9998C5.70296 30.9995 1.00127 26.2981 1.00122 20.4988C1.00142 14.6996 5.70305 9.99805 11.5022 9.9978H28.4651L20.7844 2.27905C20.4923 1.98555 20.4931 1.51071 20.7864 1.21851C21.0799 0.926483 21.5547 0.927185 21.8469 1.22046L30.7864 10.2029C31.0772 10.4955 31.0774 10.969 30.7864 11.2615L21.8469 20.2439C21.5548 20.537 21.0799 20.5376 20.7864 20.2458C20.493 19.9536 20.4923 19.4788 20.7844 19.1853L28.4338 11.4978H11.5022C6.53147 11.498 2.50142 15.528 2.50122 20.4988C2.50127 25.4696 6.53138 29.4995 11.5022 29.4998H14.4202C14.8343 29.4998 15.17 29.8357 15.1702 30.2498C15.1701 30.6639 14.8343 30.9998 14.4202 30.9998H11.5022Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRight32.category = 'Arrows';

export default RoundedArrowAngleRight32;
