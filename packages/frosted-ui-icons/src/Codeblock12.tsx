import * as React from 'react';
import { IconProps } from './types';

export const Codeblock12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M6.875 7.5L8.02145 6.35355C8.21671 6.1583 8.21671 5.8417 8.02145 5.64645L6.875 4.5M5.125 7.5L3.97855 6.35355C3.7833 6.1583 3.7833 5.8417 3.97855 5.64645L5.125 4.5M9.125 1.875H2.875C2.3227 1.875 1.875 2.3227 1.875 2.875V9.125C1.875 9.67729 2.3227 10.125 2.875 10.125H9.125C9.67729 10.125 10.125 9.67729 10.125 9.125V2.875C10.125 2.3227 9.67729 1.875 9.125 1.875Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Codeblock12;
