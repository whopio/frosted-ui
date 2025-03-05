import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.50004 7.16671H2.50004C2.13185 7.16671 1.83337 7.46517 1.83337 7.83337V12.8334C1.83337 13.2016 2.13185 13.5 2.50004 13.5H4.50004M4.50004 13.5V7.33337L7.14724 2.19473C7.26151 1.97283 7.49104 1.83337 7.74071 1.83337C8.55897 1.83337 9.18724 2.56361 9.06117 3.37211L8.67744 5.83337H12.1726C13.3971 5.83337 14.3341 6.92377 14.1499 8.13424L13.5919 11.8009C13.4432 12.778 12.6031 13.5 11.6147 13.5H4.50004Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThumbUp16;
