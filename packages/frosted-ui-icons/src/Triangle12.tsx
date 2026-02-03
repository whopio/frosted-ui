import * as React from 'react';
import { IconProps } from './types';

export const Triangle12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.05882 1.98529L11.0588 9.48529C11.4851 10.2846 10.9059 11.25 10 11.25H2C1.0941 11.25 0.514868 10.2846 0.941176 9.48529L4.94118 1.98529C5.39294 1.13824 6.60706 1.13824 7.05882 1.98529Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Triangle12;
