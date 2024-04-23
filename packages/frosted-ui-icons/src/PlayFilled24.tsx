import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6 3.96431V20.0356C6 20.1935 6.17423 20.2891 6.30738 20.2044L18.9348 12.1687C19.0583 12.0901 19.0583 11.9098 18.9348 11.8312L6.30738 3.79558C6.17423 3.71085 6 3.80649 6 3.96431Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M5.25 3.96431V20.0356C5.25 20.7853 6.0776 21.2396 6.71003 20.8371L6.30738 20.2044L6.71003 20.8371L19.3375 12.8015C19.9241 12.4281 19.9241 11.5718 19.3375 11.1985L18.9348 11.8312L19.3375 11.1985L6.71003 3.16283C6.0776 2.76037 5.25 3.21467 5.25 3.96431Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default PlayFilled24;