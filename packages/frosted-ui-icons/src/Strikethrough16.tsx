import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.7186 4.57405C11.5514 3.77076 10.8526 1.83331 8.00117 1.83331C5.26043 1.83331 4.23265 3.61559 4.23265 4.91665C4.23265 6.94178 6.10305 7.47051 8.00117 7.97711M3.97921 11.4259C4.23564 12.2292 5.14968 14.1666 8.00117 14.1666C10.7419 14.1666 11.941 12.3844 11.941 11.0833C11.941 10.5821 11.8264 10.1726 11.6252 9.83238M1.83337 7.99998H14.1667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Strikethrough16;
