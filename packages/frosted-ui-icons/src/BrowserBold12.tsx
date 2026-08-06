import * as React from 'react';
import { IconProps } from './types';

export const BrowserBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBold12"
      {...props}
    >
      <path
        d="M8.90039 0C10.6122 0.000211023 11.9998 1.38784 12 3.09961V8.90039C11.9998 10.6122 10.6122 11.9998 8.90039 12H3.09961C1.38784 11.9998 0.000210765 10.6122 0 8.90039V3.09961C0.000211023 1.38784 1.38784 0.000211023 3.09961 0H8.90039ZM2 7V8.90039C2.00021 9.5076 2.49241 9.99979 3.09961 10H8.90039C9.50759 9.99979 9.99979 9.5076 10 8.90039V7H2ZM3.09961 2C2.49241 2.00021 2.00021 2.49241 2 3.09961V5H10V3.09961C9.99979 2.49241 9.50759 2.00021 8.90039 2H3.09961ZM3.5 2.5C4.05228 2.5 4.5 2.94772 4.5 3.5C4.5 4.05228 4.05228 4.5 3.5 4.5C2.94772 4.5 2.5 4.05228 2.5 3.5C2.5 2.94772 2.94772 2.5 3.5 2.5Z"
        fill={color}
      />
    </svg>
  );
};

BrowserBold12.category = 'Interface General';

export default BrowserBold12;
