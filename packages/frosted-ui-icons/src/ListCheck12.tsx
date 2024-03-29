import * as React from 'react';
import { IconProps } from './types';

export const ListCheck12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.77149 4.74888L4.33398 5.1239L5.2698 3.87612M6.904 4.5H8.154M6.875 7.5H8.125M3.77149 7.74945L4.33398 8.12445L5.2698 6.8767M2.875 10.125H9.125C9.6773 10.125 10.125 9.6773 10.125 9.125V2.875C10.125 2.32271 9.6773 1.875 9.125 1.875H2.875C2.32271 1.875 1.875 2.32271 1.875 2.875V9.125C1.875 9.6773 2.32271 10.125 2.875 10.125Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ListCheck12;
