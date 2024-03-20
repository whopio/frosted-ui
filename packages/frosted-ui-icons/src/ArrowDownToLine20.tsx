import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownToLine20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5417 11.0417L10.5893 13.9941C10.2639 14.3195 9.73621 14.3195 9.41079 13.9941L6.45837 11.0417M10 2.29167V13.9583M16.0417 17.7083H3.95837"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowDownToLine20;
