import * as React from 'react';
import { IconProps } from './types';

export const BellSlash16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M7 2V1.79452C7 1.35616 7.44828 1 8 1C8.55172 1 9 1.35616 9 1.79452V2M11 12C11 13.6558 9.6558 15 8 15C6.3442 15 5 13.6558 5 12M1 15L15 1M11.87 6.75597V5.99795C11.87 3.94112 10.3113 2.14139 8.25534 2.00841C5.9995 1.86212 4.12555 3.64412 4.12555 5.86497V6.75597C4.12555 7.20368 3.85911 7.6248 3.43725 7.77552C2.53136 8.10355 1.90523 9.01227 2.01181 10.0496C2.12726 11.1755 3.13973 12 4.27653 12H11.7235C12.8558 12 13.8727 11.1755 13.9882 10.0496C14.0948 9.00784 13.4686 8.10355 12.5627 7.77552C12.1409 7.6248 11.8745 7.20368 11.8745 6.75597H11.87Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BellSlash16;
