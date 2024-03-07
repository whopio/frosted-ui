import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlus20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.69926 1.04346C5.11347 1.04346 5.44926 1.37924 5.44926 1.79346V2.99287C5.56293 2.98473 5.67771 2.98059 5.79346 2.98059H13.291C13.4067 2.98059 13.5215 2.98473 13.6352 2.99287V1.79346C13.6352 1.37924 13.971 1.04346 14.3852 1.04346C14.7994 1.04346 15.1352 1.37924 15.1352 1.79346V3.35189C16.8425 4.07187 18.041 5.76127 18.041 7.73059V8.57191L18.041 8.57362C18.041 8.98783 17.7052 9.32362 17.291 9.32362H2.54346V13.2909C2.54346 15.0858 3.99853 16.5409 5.79346 16.5409H8.57361C8.98783 16.5409 9.32361 16.8767 9.32361 17.2909C9.32361 17.7051 8.98783 18.0409 8.57361 18.0409H5.79346C3.17011 18.0409 1.04346 15.9143 1.04346 13.2909V8.57362V7.73059C1.04346 5.76127 2.2419 4.07185 3.94926 3.35188V1.79346C3.94926 1.37924 4.28504 1.04346 4.69926 1.04346ZM16.541 7.82362V7.73059C16.541 5.93566 15.0859 4.48059 13.291 4.48059H5.79346C3.99853 4.48059 2.54346 5.93567 2.54346 7.73059V7.82362H16.541Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M15.5 13V15.5M15.5 18V15.5M15.5 15.5H13M15.5 15.5H18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarPlus20;
