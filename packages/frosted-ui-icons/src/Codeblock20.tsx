import * as React from 'react';
import { IconProps } from './types';

export const Codeblock20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.03324 10.8853V12.9212C5.03324 13.8546 5.03324 14.3214 5.21491 14.6779C5.37466 14.9914 5.62966 15.2464 5.94324 15.4062C6.29974 15.5878 6.76649 15.5879 7.69991 15.5879L14.4499 15.5879C15.3833 15.5879 15.85 15.5878 16.2066 15.4062C16.5202 15.2464 16.7751 14.9914 16.9349 14.6779C17.1166 14.3214 17.1166 13.8546 17.1166 12.9212V6.10868C17.1166 5.23418 17.1166 4.79692 16.9566 4.45859C16.7917 4.11002 16.5111 3.8294 16.1625 3.66453C15.8242 3.50452 15.3869 3.50452 14.5124 3.50452H13.7588"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9717 4.25977L12.2728 5.43326C12.6208 5.74712 12.6208 6.23669 12.2728 6.55055L10.9717 7.72404M6.68982 8.71283L8.96871 3.12502M4.6871 7.72404L3.386 6.55055C3.038 6.23669 3.038 5.74712 3.386 5.43326L4.6871 4.25977"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Codeblock20;
