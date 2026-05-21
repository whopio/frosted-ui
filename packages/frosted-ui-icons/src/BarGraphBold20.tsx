import * as React from 'react';
import { IconProps } from './types';

export const BarGraphBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.5 11C5.32843 11 6 11.6716 6 12.5V17.5C6 18.3284 5.32843 19 4.5 19H2.5C1.67157 19 1 18.3284 1 17.5V12.5C1 11.6716 1.67157 11 2.5 11H4.5ZM11 1C11.8284 1 12.5 1.67157 12.5 2.5V17.5C12.5 18.3284 11.8284 19 11 19H9C8.22334 19 7.58461 18.4097 7.50781 17.6533L7.5 17.5V2.5C7.5 1.67157 8.17157 1 9 1H11ZM17.5 6C18.3284 6 19 6.67157 19 7.5V17.5L18.9922 17.6533C18.9154 18.4097 18.2767 19 17.5 19H15.5C14.6716 19 14 18.3284 14 17.5V7.5C14 6.67157 14.6716 6 15.5 6H17.5ZM3 17H4V13H3V17ZM9.5 17H10.5V3H9.5V17ZM16 17H17V8H16V17Z"
        fill={color}
      />
    </svg>
  );
};

BarGraphBold20.category = 'Stats & Charts';

export default BarGraphBold20;
