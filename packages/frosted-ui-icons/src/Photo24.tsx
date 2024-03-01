import * as React from 'react';
import { IconProps } from './types';

export const Photo24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.75 17.75V6.25C2.75 4.317 4.317 2.75 6.25 2.75H17.75C19.683 2.75 21.25 4.317 21.25 6.25V17.75C21.25 19.683 19.683 21.25 17.75 21.25H6.25C4.317 21.25 2.75 19.683 2.75 17.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 16L5.72785 12.2871C6.00013 11.9476 6.41181 11.75 6.84702 11.75V11.75C7.25482 11.75 7.64336 11.9236 7.9155 12.2273L16 21.25M21 18L17.4197 14.2075C17.144 13.9155 16.7603 13.75 16.3587 13.75V13.75C15.9161 13.75 15.4974 13.9509 15.2205 14.2962L12.7386 17.3907"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="13"
          cy="8"
          r="2.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 17.75V6.25C2.75 4.317 4.317 2.75 6.25 2.75H17.75C19.683 2.75 21.25 4.317 21.25 6.25V17.75C21.25 19.683 19.683 21.25 17.75 21.25H6.25C4.317 21.25 2.75 19.683 2.75 17.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 16L5.72785 12.2871C6.00013 11.9476 6.41181 11.75 6.84702 11.75V11.75C7.25482 11.75 7.64336 11.9236 7.9155 12.2273L16 21.25M21 18L17.4197 14.2075C17.144 13.9155 16.7603 13.75 16.3587 13.75V13.75C15.9161 13.75 15.4974 13.9509 15.2205 14.2962L12.7386 17.3907"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="13"
          cy="8"
          r="2.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Photo24;