import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.75 14.8947C1.75 13.3684 2.39251 11.9127 3.52011 10.8841L11.7557 3.3716C14.1602 1.17826 17.8398 1.17826 20.2443 3.3716L28.4799 10.8841C29.6075 11.9127 30.25 13.3684 30.25 14.8947V26.1786C30.25 28.4272 28.4272 30.25 26.1786 30.25H22.25C21.4216 30.25 20.75 29.5784 20.75 28.75V21C20.75 18.3766 18.6234 16.25 16 16.25C13.3766 16.25 11.25 18.3766 11.25 21V28.75C11.25 29.5784 10.5784 30.25 9.75 30.25H5.82143C3.57284 30.25 1.75 28.4272 1.75 26.1786V14.8947Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

HomeFilled32.category = 'Buildings';

export default HomeFilled32;
