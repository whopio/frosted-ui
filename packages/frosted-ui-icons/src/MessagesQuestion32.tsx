import * as React from 'react';
import { IconProps } from './types';

export const MessagesQuestion32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M22.9998 19H25.6694C27.142 19 28.336 17.8061 28.336 16.3333V7.66667C28.336 6.19391 27.142 5 25.6694 5H12.0026C10.5299 5 9.33598 6.19391 9.33598 7.66667V10.3333M20.336 10.3333H6.33598C4.86322 10.3333 3.66931 11.5272 3.66931 13V21.6667C3.66931 23.1395 4.86322 24.3333 6.33598 24.3333H8.00264V27.6667L14.0027 24.3333H20.336C21.8087 24.3333 23.0027 23.1395 23.0027 21.6667V13C23.0027 11.5272 21.8087 10.3333 20.336 10.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2095 17.8195C13.3112 17.143 13.6897 16.7776 14.0691 16.5198C14.4401 16.2675 14.8112 15.9402 14.8112 15.3339C14.8112 14.4972 14.1399 13.8196 13.3112 13.8196C12.4824 13.8196 11.8112 14.4972 11.8112 15.3339"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.4375 20.1562C12.4375 20.5705 12.7733 20.9062 13.1875 20.9062C13.6017 20.9062 13.9375 20.5705 13.9375 20.1562C13.9375 19.742 13.6017 19.4062 13.1875 19.4062C12.7733 19.4062 12.4375 19.742 12.4375 20.1562Z"
        fill={color}
        stroke={color}
        strokeWidth=".5"
      />
    </svg>
  );
};

export default MessagesQuestion32;
