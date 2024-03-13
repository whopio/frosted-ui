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
          d="M8.30986 14.0563H5.15493V9.09859H2V5.94366H8.30986V14.0563zM14.6197 14.0563H11.0141L14.3944 5.94366H18L14.6197 14.0563zM11.0141 9.5493C12.0098 9.5493 12.8169 8.74215 12.8169 7.74648 12.8169 6.75081 12.0098 5.94366 11.0141 5.94366 10.0184 5.94366 9.21127 6.75081 9.21127 7.74648 9.21127 8.74215 10.0184 9.5493 11.0141 9.5493z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TradingView20;
