import * as React from 'react';
import { IconProps } from './types';

export const Messages32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.9997 19H25.6693C27.1419 19 28.3359 17.8061 28.3359 16.3333V7.66667C28.3359 6.19391 27.1419 5 25.6693 5H12.0025C10.5298 5 9.33586 6.19391 9.33586 7.66667V10.3333M20.3359 10.3333H6.33586C4.8631 10.3333 3.66919 11.5272 3.66919 13V21.6667C3.66919 23.1395 4.8631 24.3333 6.33586 24.3333H8.00252V27.6667L14.0026 24.3333H20.3359C21.8086 24.3333 23.0026 23.1395 23.0026 21.6667V13C23.0026 11.5272 21.8086 10.3333 20.3359 10.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Messages32;
