import * as React from 'react';
import { IconProps } from './types';

export const TradingView24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.88732 17.0704H5.94366V10.8733H2V6.9296H9.88732V17.0704zM17.7746 17.0704H13.2676L17.493 6.9296H22L17.7746 17.0704zM13.2676 11.4366C14.5122 11.4366 15.5211 10.4277 15.5211 9.18312 15.5211 7.93853 14.5122 6.9296 13.2676 6.9296 12.023 6.9296 11.0141 7.93853 11.0141 9.18312 11.0141 10.4277 12.023 11.4366 13.2676 11.4366z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TradingView24;
