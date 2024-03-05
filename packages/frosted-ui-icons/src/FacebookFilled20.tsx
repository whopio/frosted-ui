import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.7188 10.25C18.7188 14.6094 15.5195 18.2305 11.3359 18.8633V12.7812H13.375L13.7617 10.25H11.3359V8.63281C11.3359 7.92969 11.6875 7.26172 12.7773 7.26172H13.8672V5.11719C13.8672 5.11719 12.8828 4.94141 11.8984 4.94141C9.92969 4.94141 8.62891 6.17188 8.62891 8.35156V10.25H6.41406V12.7812H8.62891V18.8633C4.44531 18.2305 1.28125 14.6094 1.28125 10.25C1.28125 5.43359 5.18359 1.53125 10 1.53125C14.8164 1.53125 18.7188 5.43359 18.7188 10.25Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled20;
