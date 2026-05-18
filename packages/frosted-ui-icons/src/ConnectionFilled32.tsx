import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.7334 19.1417C31.5973 20.1942 31.5966 22.8796 29.7324 23.9317L18.3027 30.3809C16.8513 31.1999 15.0769 31.1986 13.6269 30.377L2.24901 23.9288C0.39114 22.8752 0.39096 20.1982 2.24901 19.1446L6.27147 16.8624L12.8867 20.6114C14.7947 21.6927 17.13 21.695 19.04 20.6172L25.6943 16.8614L29.7334 19.1417ZM13.626 1.62408C15.0764 0.801747 16.8517 0.800435 18.3037 1.62017L29.7334 8.07232C31.5973 9.12494 31.5968 11.8103 29.7324 12.8624L18.3027 19.3116C16.8513 20.1305 15.0769 20.1292 13.6269 19.3077L2.24901 12.8594C0.39091 11.806 0.391 9.12895 2.24901 8.07525L13.626 1.62408Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ConnectionFilled32.category = 'Interface General';

export default ConnectionFilled32;
