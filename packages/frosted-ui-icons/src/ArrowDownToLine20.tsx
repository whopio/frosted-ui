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
          d="M13.5416 11.0417L10.5892 13.9941C10.2638 14.3195 9.73615 14.3195 9.41073 13.9941L6.45831 11.0417M9.99998 2.29167V13.9583M16.0416 17.7083H3.95831"
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
