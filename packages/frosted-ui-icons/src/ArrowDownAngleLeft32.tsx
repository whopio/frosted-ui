import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeft32"
      {...props}
    >
      <path
        d="M30.25 5c.414 0 .75.336.75.75V17.5c0 1.795-1.455 3.25-3.25 3.25H3.612l5.158 4.959c.298.287.308.762.021 1.06-.287.299-.762.309-1.06.022l-6.5-6.25C1.082 20.4 1 20.204 1 20c0-.204.083-.4.23-.541l6.5-6.25c.3-.287.774-.277 1.061.021.287.3.277.774-.021 1.061L3.612 19.25H27.75c.966 0 1.75-.784 1.75-1.75V5.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeft32.category = 'Arrows';

export default ArrowDownAngleLeft32;
