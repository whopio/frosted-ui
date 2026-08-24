import * as React from 'react';
import { IconProps } from './types';

export const BarChartBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChartBold12"
      {...props}
    >
      <path
        d="M1.25 7.75c.552 0 1 .448 1 1v1.5c0 .552-.448 1-1 1s-1-.448-1-1v-1.5c0-.552.448-1 1-1zm3-4.5c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1s-1-.448-1-1v-6c0-.552.448-1 1-1zm3 1.5c.552 0 1 .448 1 1v4.5c0 .552-.448 1-1 1s-1-.448-1-1v-4.5c0-.552.448-1 1-1zm3-4c.552 0 1 .448 1 1v8.5c0 .552-.448 1-1 1s-1-.448-1-1v-8.5c0-.552.448-1 1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BarChartBold12.category = 'Stats & Charts';

export default BarChartBold12;
