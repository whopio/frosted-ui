import * as React from 'react';
import { IconProps } from './types';

export const TradingView12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.94366 8.53521H2.97183V5.43661H1V3.46478H4.94366V8.53521zM8.88732 8.53521H6.6338L8.74648 3.46478H11L8.88732 8.53521zM6.6338 5.7183C7.25609 5.7183 7.76056 5.21384 7.76056 4.59154 7.76056 3.96925 7.25609 3.46478 6.6338 3.46478 6.01151 3.46478 5.50704 3.96925 5.50704 4.59154 5.50704 5.21384 6.01151 5.7183 6.6338 5.7183z"
        fill={color}
      />
    </svg>
  );
};

export default TradingView12;
