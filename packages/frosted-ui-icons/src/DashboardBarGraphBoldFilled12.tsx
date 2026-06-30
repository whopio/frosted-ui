import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.99978 0C10.2088 0 11.9995 1.79092 11.9997 3.99989V7.99978C11.9997 10.2089 10.2089 11.9997 7.99978 11.9997H3.99989C1.79081 11.9997 0 10.2089 0 7.99978V3.99989C0.000131934 1.79092 1.79089 0 3.99989 0H7.99978ZM4.49987 4.99986C3.94769 4.99986 3.50003 5.44767 3.4999 5.99983V7.49979C3.4999 8.05206 3.9476 8.49976 4.49987 8.49976C5.05214 8.49976 5.49985 8.05206 5.49985 7.49979V5.99983C5.49971 5.44767 5.05206 4.99986 4.49987 4.99986ZM7.49979 3.4999C6.9476 3.4999 6.49995 3.94772 6.49982 4.49987V7.49979C6.49982 8.05206 6.94752 8.49976 7.49979 8.49976C8.05206 8.49976 8.49976 8.05206 8.49976 7.49979V4.49987C8.49963 3.94772 8.05198 3.4999 7.49979 3.4999Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphBoldFilled12.category = 'Stats & Charts';

export default DashboardBarGraphBoldFilled12;
