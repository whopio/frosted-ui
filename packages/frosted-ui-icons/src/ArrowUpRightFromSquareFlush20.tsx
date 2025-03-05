import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFlush20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.70833 3.125H5.79167C4.85825 3.125 4.39153 3.125 4.03502 3.30666C3.72141 3.46644 3.46644 3.72141 3.30666 4.03502C3.125 4.39153 3.125 4.85825 3.125 5.79167V14.2083C3.125 15.1417 3.125 15.6085 3.30666 15.965C3.46644 16.2786 3.72141 16.5336 4.03502 16.6933C4.39153 16.875 4.85825 16.875 5.79167 16.875H14.2083C15.1417 16.875 15.6085 16.875 15.965 16.6933C16.2786 16.5336 16.5336 16.2786 16.6933 15.965C16.875 15.6085 16.875 15.1417 16.875 14.2083V12.2917M11.4583 3.125H16.875M16.875 3.125V8.54167M16.875 3.125L9.16667 10.8333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightFromSquareFlush20;
