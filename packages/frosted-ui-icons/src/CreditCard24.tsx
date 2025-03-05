import * as React from 'react';
import { IconProps } from './types';

export const CreditCard24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M0.75 9.25H23.25M4.75 15.75H9.25M3.57 20.25H20.43C21.9874 20.25 23.25 18.9874 23.25 17.43V6.57C23.25 5.01256 21.9874 3.75 20.43 3.75H3.57C2.01256 3.75 0.75 5.01256 0.75 6.57V17.43C0.75 18.9874 2.01256 20.25 3.57 20.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CreditCard24;
