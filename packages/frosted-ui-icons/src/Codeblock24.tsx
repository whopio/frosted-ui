import * as React from 'react';
import { IconProps } from './types';

export const Codeblock24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.62451 12.4595V15.05C5.62451 16.1701 5.62451 16.7302 5.84251 17.158C6.03421 17.5343 6.34021 17.8403 6.71651 18.032C7.14431 18.25 7.70441 18.25 8.82451 18.25H16.9245C18.0446 18.25 18.6047 18.25 19.0325 18.032C19.4088 17.8403 19.7148 17.5343 19.9065 17.158C20.1245 16.7302 20.1245 16.1701 20.1245 15.05V6.875C20.1245 5.82559 20.1245 5.30088 19.9325 4.89489C19.7347 4.4766 19.3979 4.13986 18.9796 3.94202C18.5736 3.75 18.0489 3.75 16.9995 3.75H16.0952"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0951 5.11182L14.6564 6.52001C15.074 6.89664 15.074 7.48412 14.6564 7.86076L13.0951 9.26895M7.99236 10.4554L10.727 3.75002M5.62452 9.26895L4.0632 7.86076C3.6456 7.48412 3.6456 6.89664 4.0632 6.52001L5.62452 5.11182"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Codeblock24;
