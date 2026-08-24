import * as React from 'react';
import { IconProps } from './types';

export const BarChartVariable20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChartVariable20"
      {...props}
    >
      <path
        d="M4 8.25c.414 0 .75.336.75.75v8.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V9c0-.414.336-.75.75-.75zM8 2c.414 0 .75.336.75.75v14.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75zm4 10.25c.414 0 .75.336.75.75v4.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V13c0-.414.336-.75.75-.75zM16 6c.414 0 .75.336.75.75v10.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BarChartVariable20.category = 'Stats & Charts';

export default BarChartVariable20;
