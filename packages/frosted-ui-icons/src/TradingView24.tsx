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
          d="M9.88732 17.0705H5.94366V10.8733H2V6.92963H9.88732V17.0705zM17.7746 17.0705H13.2676L17.493 6.92963H22L17.7746 17.0705zM13.2676 11.4367C14.5122 11.4367 15.5211 10.4277 15.5211 9.18315 15.5211 7.93856 14.5122 6.92963 13.2676 6.92963 12.023 6.92963 11.0141 7.93856 11.0141 9.18315 11.0141 10.4277 12.023 11.4367 13.2676 11.4367z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TradingView24;
