import * as React from 'react';
import { IconProps } from './types';

export const XDotCom32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_286_148)">
          <path
            d="M18.9789 13.5498L30.6355 -3.05176e-05H27.8732L17.7518 11.7651L9.66789 -3.05176e-05H0.344025L12.5685 17.7909L0.344025 32H3.10642L13.7949 19.5756L22.3321 32H31.656L18.9782 13.5498H18.9789ZM15.1954 17.9477L13.9568 16.1761L4.10175 2.07946H8.34462L16.2978 13.4559L17.5364 15.2275L27.8745 30.0151H23.6317L15.1954 17.9483V17.9477Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_286_148">
            <path fill={color} d="M0 0H32V32H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default XDotCom32;
