import * as React from 'react';
import { IconProps } from './types';

export const BarChartVariableBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChartVariableBold32"
      {...props}
    >
      <path
        d="M5.75 12.75c.552 0 1 .448 1 1v13.5c0 .552-.448 1-1 1s-1-.448-1-1v-13.5c0-.552.448-1 1-1zm5 3c.552 0 1 .448 1 1v10.5c0 .552-.448 1-1 1s-1-.448-1-1v-10.5c0-.552.448-1 1-1zm5-12c.552 0 1 .448 1 1v22.5c0 .552-.448 1-1 1s-1-.448-1-1V4.75c0-.552.448-1 1-1zm5 17c.552 0 1 .448 1 1v5.5c0 .552-.448 1-1 1s-1-.448-1-1v-5.5c0-.552.448-1 1-1zm5-12c.552 0 1 .448 1 1v17.5c0 .552-.448 1-1 1s-1-.448-1-1V9.75c0-.552.448-1 1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BarChartVariableBold32.category = 'Stats & Charts';

export default BarChartVariableBold32;
