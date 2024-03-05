import * as React from 'react';
import { IconProps } from './types';

export const TradingView20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.2227 6.96C13.2227 8.08712 12.3091 9.00082 11.182 9.00082C10.0549 9.00082 9.14118 8.08712 9.14118 6.96C9.14118 5.83289 10.0549 4.91919 11.182 4.91919C12.3091 4.91919 13.2227 5.83289 13.2227 6.96ZM8.16329 5.01273H3.06539e-05L0 9.09435H4.08164V15.0808H8.16329V5.01273ZM15.3197 5.01273H20L15.7824 15.0808H11.0885L15.3197 5.01273Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default TradingView20;
