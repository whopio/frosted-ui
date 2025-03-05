import * as React from 'react';
import { IconProps } from './types';

export const Heading24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 2.85714C2 2.38376 2.38376 2 2.85714 2H7.42857C7.90196 2 8.28571 2.38376 8.28571 2.85714C8.28571 3.33053 7.90196 3.71429 7.42857 3.71429H6V11.1429L18 11.1429V3.71429H16.5714C16.098 3.71429 15.7143 3.33053 15.7143 2.85714C15.7143 2.38376 16.098 2 16.5714 2H21.1429C21.6162 2 22 2.38376 22 2.85714C22 3.33053 21.6162 3.71429 21.1429 3.71429H19.7143V20.2857H21.1429C21.6162 20.2857 22 20.6695 22 21.1429C22 21.6162 21.6162 22 21.1429 22H16.5714C16.098 22 15.7143 21.6162 15.7143 21.1429C15.7143 20.6695 16.098 20.2857 16.5714 20.2857H18V12.8571L6 12.8571V20.2857H7.42857C7.90196 20.2857 8.28571 20.6695 8.28571 21.1429C8.28571 21.6162 7.90196 22 7.42857 22H2.85714C2.38376 22 2 21.6162 2 21.1429C2 20.6695 2.38376 20.2857 2.85714 20.2857H4.28571V3.71429H2.85714C2.38376 3.71429 2 3.33053 2 2.85714Z"
        fill={color}
      />
    </svg>
  );
};

export default Heading24;
