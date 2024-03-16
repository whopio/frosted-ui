import * as React from 'react';
import { IconProps } from './types';

export const Sun16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.99878 2.19388V1.17838M3.89322 12.1057L3.17515 12.8238M7.99878 14.8218V13.8063M12.8223 3.17645L12.1041 3.89452M13.8047 8.00006H14.8202M12.1041 12.1057L12.8223 12.8238M1.17706 8.00006H2.19257M3.1751 3.17641L3.89316 3.89448M10.4736 5.5252C11.8404 6.89206 11.8404 9.10813 10.4736 10.4749C9.10672 11.8418 6.89065 11.8418 5.52381 10.4749C4.15697 9.10813 4.15697 6.89206 5.52381 5.5252C6.89065 4.15837 9.10672 4.15837 10.4736 5.5252Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sun16;