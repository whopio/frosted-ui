import * as React from 'react';
import { IconProps } from './types';

export const BarChartBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChartBold20"
      {...props}
    >
      <path
        d="M3 13.75c.552 0 1 .448 1 1v2.5c0 .552-.448 1-1 1s-1-.448-1-1v-2.5c0-.552.448-1 1-1zm3.5-4c.552 0 1 .448 1 1v6.5c0 .552-.448 1-1 1s-1-.448-1-1v-6.5c0-.552.448-1 1-1zm3.5-4c.552 0 1 .448 1 1v10.5c0 .552-.448 1-1 1s-1-.448-1-1V6.75c0-.552.448-1 1-1zm3.5 5c.552 0 1 .448 1 1v5.5c0 .552-.448 1-1 1s-1-.448-1-1v-5.5c0-.552.448-1 1-1zm3.5-9c.552 0 1 .448 1 1v14.5c0 .552-.448 1-1 1s-1-.448-1-1V2.75c0-.552.448-1 1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BarChartBold20.category = 'Stats & Charts';

export default BarChartBold20;
