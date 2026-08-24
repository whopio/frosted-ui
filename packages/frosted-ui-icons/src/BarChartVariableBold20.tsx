import * as React from 'react';
import { IconProps } from './types';

export const BarChartVariableBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChartVariableBold20"
      {...props}
    >
      <path
        d="M4 8c.552 0 1 .448 1 1v8.25c0 .552-.448 1-1 1s-1-.448-1-1V9c0-.552.448-1 1-1zm4-6.25c.552 0 1 .448 1 1v14.5c0 .552-.448 1-1 1s-1-.448-1-1V2.75c0-.552.448-1 1-1zM12 12c.552 0 1 .448 1 1v4.25c0 .552-.448 1-1 1s-1-.448-1-1V13c0-.552.448-1 1-1zm4-6.25c.552 0 1 .448 1 1v10.5c0 .552-.448 1-1 1s-1-.448-1-1V6.75c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

BarChartVariableBold20.category = 'Stats & Charts';

export default BarChartVariableBold20;
