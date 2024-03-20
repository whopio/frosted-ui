import * as React from 'react';
import { IconProps } from './types';

export const Paypal12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g
          stroke={color}
          clipPath="url(#clip0_882_251)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1.55955 9.70619H2.81388C3.02534 9.70619 3.20966 9.56227 3.26095 9.35713L3.77766 7.2903C3.82894 7.08515 4.01327 6.94124 4.22472 6.94124H4.78657C8.76511 6.94124 9.31828 4.46737 9.38609 4.01609C9.39315 3.9691 9.39909 3.92328 9.40436 3.87606C9.44996 3.46814 9.53577 1.41135 6.62987 1.41135H3.68259C3.25062 1.41135 2.8766 1.71137 2.78289 2.13306L1.19967 9.25755C1.14851 9.48779 1.3237 9.70619 1.55955 9.70619Z" />
          <path d="M2.77353 9.70609L2.57608 10.644C2.52784 10.8731 2.70266 11.0886 2.93681 11.0886L4.4088 11.0887C4.62847 11.0887 4.81762 10.9336 4.8607 10.7182L5.17334 9.15489C5.21642 8.93949 5.40555 8.78444 5.62522 8.78444H6.16908C10.1282 8.78444 10.6953 5.95782 10.7676 5.41707C10.7755 5.35778 10.7833 5.29968 10.7896 5.24019C10.8257 4.89905 10.8498 3.65318 9.39485 3.03909" />
        </g>
        <defs>
          <clipPath id="clip0_882_251">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Paypal12;
