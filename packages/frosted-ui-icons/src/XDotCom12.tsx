import * as React from 'react';
import { IconProps } from './types';

export const XDotCom12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.1171 5.08118L11.4883 0H10.4525L6.65695 4.41192L3.62547 0H0.129028L4.71321 6.6716L0.129028 12H1.16492L5.17309 7.34086L8.37455 12H11.871L7.11684 5.08118H7.1171ZM5.69829 6.73038L5.23382 6.06604L1.53817 0.779808H3.12925L6.11168 5.04596L6.57615 5.71031L10.453 11.2557H8.86188L5.69829 6.73063V6.73038Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default XDotCom12;
