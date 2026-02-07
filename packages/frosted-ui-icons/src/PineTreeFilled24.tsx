import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_7289_15)">
        <path
          d="M11.3232 0.279297C11.6932 -0.0971349 12.3059 -0.0973234 12.6758 0.279297L12.751 0.365234L19.7939 9.46875C20.2766 10.0931 19.8312 10.9998 19.042 11H16.5469L21.8223 18.5039C22.2646 19.1333 21.8142 19.9998 21.0449 20H12.749V23.251C12.749 23.6652 12.4132 24.001 11.999 24.001C11.585 24.0007 11.249 23.665 11.249 23.251V20H2.95605C2.1865 20 1.73604 19.1333 2.17871 18.5039L7.45801 11H4.95801C4.16865 11 3.72312 10.0931 4.20605 9.46875L11.248 0.365234L11.3232 0.279297Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_7289_15">
          <path fill={color} d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

PineTreeFilled24.category = 'Nature & Weather';

export default PineTreeFilled24;
