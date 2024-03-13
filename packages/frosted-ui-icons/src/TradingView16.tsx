import * as React from 'react';
import { IconProps } from './types';

export const TradingView16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.52113 11.5493H3.76056V7.21125H1V4.45068H6.52113V11.5493zM12.0423 11.5493H8.88732L11.8451 4.45068H15L12.0423 11.5493zM8.88732 7.60561C9.75853 7.60561 10.4648 6.89936 10.4648 6.02815 10.4648 5.15694 9.75853 4.45068 8.88732 4.45068 8.01611 4.45068 7.30986 5.15694 7.30986 6.02815 7.30986 6.89936 8.01611 7.60561 8.88732 7.60561z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TradingView16;
