import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare20 = ({
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
        d="M15.2083 11.6667V14.2083C15.2083 15.1417 15.2083 15.6085 15.0267 15.965C14.8669 16.2786 14.6119 16.5336 14.2983 16.6933C13.9418 16.875 13.4751 16.875 12.5417 16.875H5.79167C4.85825 16.875 4.39153 16.875 4.03502 16.6933C3.72141 16.5336 3.46644 16.2786 3.30666 15.965C3.125 15.6085 3.125 15.1417 3.125 14.2083V7.39583C3.125 6.52132 3.125 6.08407 3.28502 5.74574C3.44988 5.39717 3.7305 5.11655 4.07907 4.95168C4.4174 4.79167 4.85466 4.79167 5.72917 4.79167H7.70833M11.4583 3.125H16.875M16.875 3.125V8.54167M16.875 3.125L9.16667 10.8333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightFromSquare20;
