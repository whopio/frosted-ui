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
          d="M8.30986 14.0564H5.15493V9.09861H2V5.94368H8.30986V14.0564zM14.6197 14.0564H11.0141L14.3944 5.94368H18L14.6197 14.0564zM11.0141 9.54931C12.0098 9.54931 12.8169 8.74217 12.8169 7.7465 12.8169 6.75083 12.0098 5.94368 11.0141 5.94368 10.0184 5.94368 9.21127 6.75083 9.21127 7.7465 9.21127 8.74217 10.0184 9.54931 11.0141 9.54931z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TradingView20;
