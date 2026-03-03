import * as React from 'react';
import { IconProps } from './types';

export const BarGraph12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M.75 7.25C.75 6.69772 1.19772 6.25 1.75 6.25H4.25V11.25H1.75C1.19772 11.25.75 10.8023.75 10.25L.75 7.25zM7.75 3.75H10.25C10.8023 3.75 11.25 4.19772 11.25 4.75V10.25C11.25 10.8023 10.8023 11.25 10.25 11.25H7.75L7.75 3.75zM4.25 1.75C4.25 1.19772 4.69772.75 5.25.75H6.75C7.30228.75 7.75 1.19772 7.75 1.75V11.25H4.25L4.25 1.75z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

BarGraph12.category = 'Stats & Charts';

export default BarGraph12;
