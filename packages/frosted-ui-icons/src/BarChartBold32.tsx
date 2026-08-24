import * as React from 'react';
import { IconProps } from './types';

export const BarChartBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChartBold32"
      {...props}
    >
      <path
        d="M5.75 21.75c.552 0 1 .448 1 1v4.5c0 .552-.448 1-1 1s-1-.448-1-1v-4.5c0-.552.448-1 1-1zm5-7c.552 0 1 .448 1 1v11.5c0 .552-.448 1-1 1s-1-.448-1-1v-11.5c0-.552.448-1 1-1zm5-6c.552 0 1 .448 1 1v17.5c0 .552-.448 1-1 1s-1-.448-1-1V9.75c0-.552.448-1 1-1zm5 6c.552 0 1 .448 1 1v11.5c0 .552-.448 1-1 1s-1-.448-1-1v-11.5c0-.552.448-1 1-1zm5-11c.552 0 1 .448 1 1v22.5c0 .552-.448 1-1 1s-1-.448-1-1V4.75c0-.552.448-1 1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BarChartBold32.category = 'Stats & Charts';

export default BarChartBold32;
