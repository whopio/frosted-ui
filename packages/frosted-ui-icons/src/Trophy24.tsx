import * as React from 'react';
import { IconProps } from './types';

export const Trophy24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 22.25H16M12 17.25V22.25M12 17.25C15.7279 17.25 18.75 14.2279 18.75 10.5V3.40306C18.75 2.90431 18.3457 2.5 17.8469 2.5H6.15306C5.65431 2.5 5.25 2.90431 5.25 3.40306V10.5C5.25 14.2279 8.27205 17.25 12 17.25ZM18.75 11.25H19.682C21.3764 11.25 22.75 9.87643 22.75 8.18204V6.28398C22.75 5.43679 22.0632 4.75 21.216 4.75H18.75M5.25 11.25H4.31796C2.62357 11.25 1.25 9.87643 1.25 8.18204V6.28398C1.25 5.43679 1.93679 4.75 2.78398 4.75H5.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Trophy24;
