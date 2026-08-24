import * as React from 'react';
import { IconProps } from './types';

export const BarChartVariableBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChartVariableBold24"
      {...props}
    >
      <path
        d="M3.75 8.75c.552 0 1 .448 1 1v10.5c0 .552-.448 1-1 1s-1-.448-1-1V9.75c0-.552.448-1 1-1zm4 2c.552 0 1 .448 1 1v8.5c0 .552-.448 1-1 1s-1-.448-1-1v-8.5c0-.552.448-1 1-1zm4-9c.552 0 1 .448 1 1v17.5c0 .552-.448 1-1 1s-1-.448-1-1V2.75c0-.552.448-1 1-1zm4 14c.552 0 1 .448 1 1v3.5c0 .552-.448 1-1 1s-1-.448-1-1v-3.5c0-.552.448-1 1-1zm4-10c.552 0 1 .448 1 1v13.5c0 .552-.448 1-1 1s-1-.448-1-1V6.75c0-.552.448-1 1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BarChartVariableBold24.category = 'Stats & Charts';

export default BarChartVariableBold24;
