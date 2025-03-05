import * as React from 'react';
import { IconProps } from './types';

export const Rotate32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M29.2499 18.75C29.2499 22.5682 24.639 29.25 16.6999 29.25C8.93571 29.25 4.11549 22.8592 3.90699 19.0063M2.75 26.25V20.25C2.75 19.4216 3.42157 18.75 4.25 18.75H10.2499M2.75 13.25C2.75 9.43182 7.36096 2.75 15.3 2.75C23.0642 2.75 27.8844 9.14081 28.0929 12.9937M29.2499 5.75V11.75C29.2499 12.5784 28.5784 13.25 27.7499 13.25H21.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Rotate32;
