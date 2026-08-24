import * as React from 'react';
import { IconProps } from './types';

export const BarChartVariable24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChartVariable24"
      {...props}
    >
      <path
        d="M3.75 9c.414 0 .75.336.75.75v10.5c0 .414-.336.75-.75.75S3 20.664 3 20.25V9.75c0-.414.336-.75.75-.75zm4 2c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75S7 20.664 7 20.25v-8.5c0-.414.336-.75.75-.75zm4-9c.414 0 .75.336.75.75v17.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75zm4 14c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm4-10c.414 0 .75.336.75.75v13.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BarChartVariable24.category = 'Stats & Charts';

export default BarChartVariable24;
