import * as React from 'react';
import { IconProps } from './types';

export const Link12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.71875 5.03125L1.6302 6.1198C1.06662 6.68338.75 7.44777.75 8.2448V8.2448C.75 9.90452 2.09548 11.25 3.7552 11.25V11.25C4.55223 11.25 5.31662 10.9334 5.8802 10.3698L6.96875 9.28125M5.03125 2.71875L6.1198 1.6302C6.68338 1.06662 7.44777.75 8.2448.75V.75C9.90452.75 11.25 2.09548 11.25 3.7552V3.7552C11.25 4.55223 10.9334 5.31662 10.3698 5.8802L9.28125 6.96875M4.75 7.25L7.25 4.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Link12;
