import * as React from 'react';
import { IconProps } from './types';

export const TradingView32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.0423 23.0986H7.52113V14.4225H2V8.9014H13.0423V23.0986zM24.0845 23.0986H17.7746L23.6901 8.9014H30L24.0845 23.0986zM17.7746 15.2113C19.5171 15.2113 20.9296 13.7987 20.9296 12.0563 20.9296 10.3139 19.5171 8.9014 17.7746 8.9014 16.0322 8.9014 14.6197 10.3139 14.6197 12.0563 14.6197 13.7987 16.0322 15.2113 17.7746 15.2113z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TradingView32;
