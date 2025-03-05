import * as React from 'react';
import { IconProps } from './types';

export const Atom16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.9191 15.0197C12.5959 15.1081 13.5373 15.0525 14.2481 14.3418C14.9588 13.631 15.0144 12.6896 14.926 12.0128C14.8341 11.3094 14.5549 10.571 14.1947 9.86364C13.8992 9.28341 13.5221 8.67129 13.0762 8.0468C13.5221 7.42226 13.8993 6.8101 14.1948 6.22983C14.555 5.52243 14.8342 4.78405 14.9261 4.08066C15.0145 3.40389 14.9589 2.46246 14.2482 1.75172C13.5374 1.04098 12.596 0.985331 11.9192 1.07375C11.2158 1.16565 10.4774 1.4449 9.77004 1.8051C9.18978 2.10057 8.57763 2.47776 7.9531 2.9236C7.32855 2.47773 6.71637 2.10051 6.13607 1.80503C5.42868 1.44483 4.69029 1.16558 3.9869 1.07369C3.31014 0.985265 2.3687 1.04091 1.65796 1.75165C0.947219 2.46239 0.891576 3.40383 0.979996 4.08059C1.0719 4.78398 1.35114 5.52236 1.71134 6.22976C2.00682 6.81006 2.38404 7.42224 2.82991 8.0468C2.38408 8.67131 2.0069 9.28345 1.71144 9.8637C1.35124 10.5711 1.07199 11.3095 0.980088 12.0129C0.891667 12.6896 0.94731 13.6311 1.65805 14.3418C2.36879 15.0526 3.31023 15.1082 3.98699 15.0198C4.69038 14.9279 5.42877 14.6486 6.13616 14.2884C6.71643 13.993 7.32858 13.6158 7.9531 13.1699C8.57759 13.6157 9.18971 13.9929 9.76995 14.2884C10.4773 14.6486 11.2157 14.9278 11.9191 15.0197ZM13.1875 2.81238C12.5686 2.19352 11.0115 2.66724 9.19487 3.88784C9.70562 4.31626 10.2161 4.78386 10.716 5.28375C11.2159 5.78369 11.6836 6.29421 12.112 6.80502C13.3326 4.98843 13.8064 3.43124 13.1875 2.81238ZM2.71862 2.81231C3.33749 2.19344 4.89471 2.66719 6.71133 3.88783C6.20055 4.31628 5.69006 4.7839 5.19015 5.28381C4.69023 5.78374 4.22259 6.29423 3.79415 6.80502C2.5735 4.9884 2.09975 3.43118 2.71862 2.81231ZM6.25081 6.34447C5.68565 6.90963 5.17054 7.483 4.71453 8.04679C5.17052 8.61055 5.6856 9.18387 6.25072 9.74899C6.8159 10.3142 7.38929 10.8293 7.9531 11.2853C8.51688 10.8293 9.09025 10.3142 9.6554 9.74906C10.2205 9.18392 10.7356 8.61057 11.1916 8.04679C10.7356 7.48298 10.2205 6.90959 9.6553 6.34441C9.09018 5.77928 8.51685 5.2642 7.9531 4.80822C7.38932 5.26422 6.81596 5.77932 6.25081 6.34447ZM2.71871 13.2812C2.09986 12.6623 2.57357 11.1051 3.79416 9.28857C4.22258 9.79932 4.69017 10.3098 5.19006 10.8097C5.69 11.3096 6.20051 11.7772 6.71132 12.2057C4.89474 13.4263 3.33757 13.9 2.71871 13.2812ZM13.1874 13.2811C12.5686 13.8999 11.0114 13.4262 9.19488 12.2057C9.70566 11.7773 10.2161 11.3096 10.7161 10.8097C11.216 10.3098 11.6836 9.79934 12.112 9.28857C13.3326 11.1051 13.8062 12.6622 13.1874 13.2811ZM8.00002 8.99998C8.5523 8.99998 9.00002 8.55227 9.00002 7.99998C9.00002 7.4477 8.5523 6.99998 8.00002 6.99998C7.44773 6.99998 7.00002 7.4477 7.00002 7.99998C7.00002 8.55227 7.44773 8.99998 8.00002 8.99998Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Atom16;
