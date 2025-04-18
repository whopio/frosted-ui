import * as React from 'react';
import { IconProps } from './types';

export const Merch16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00002 3.75C10.0625 3.75 10.3125 1.75 10.3125 1.75L14.88 4.03376C15.1212 4.15434 15.2233 4.44442 15.1109 4.68948L14.0592 6.98153C13.9556 7.20739 13.7018 7.32287 13.4635 7.25263L12.25 6.89503V13.75C12.25 14.0261 12.0262 14.25 11.75 14.25H4.25002C3.97388 14.25 3.75002 14.0261 3.75002 13.75V6.89503L2.53658 7.25263C2.2982 7.32287 2.04442 7.20739 1.94079 6.98153L0.88916 4.68948C0.776722 4.44442 0.878842 4.15434 1.12 4.03376L5.68752 1.75C5.68752 1.75 5.93752 3.75 8.00002 3.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Merch16;
