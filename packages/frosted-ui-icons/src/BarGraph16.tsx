import * as React from 'react';
import { IconProps } from './types';

export const BarGraph16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M.75 9.25C.75 8.69772 1.19772 8.25 1.75 8.25H5.58333V15.25H1.75C1.19772 15.25.75 14.8023.75 14.25L.75 9.25zM10.416 4.75H14.2493C14.8016 4.75 15.2493 5.19772 15.2493 5.75V14.25C15.2493 14.8022 14.8016 15.25 14.2493 15.25H10.416L10.416 4.75z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M5.58398 1.75C5.58398 1.19772 6.0317 0.75 6.58398 0.75H9.41732C9.9696 0.75 10.4173 1.19772 10.4173 1.75V15.25H5.58398L5.58398 1.75Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

BarGraph16.category = 'Stats & Charts';

export default BarGraph16;
