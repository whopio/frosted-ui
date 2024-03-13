import * as React from 'react';
import { IconProps } from './types';

export const TiktokSize24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.7153 10.2134C18.9357 10.2134 17.288 9.64796 15.9425 8.68698V15.6726C15.9425 19.1671 13.1082 22 9.61201 22C8.30752 22 7.09504 21.6058 6.08784 20.9298C4.39549 19.7941 3.28125 17.863 3.28125 15.6726C3.28125 12.1783 6.11561 9.34543 9.61211 9.3455C9.90268 9.34536 10.1929 9.36509 10.4807 9.40441V10.18L10.4806 12.904C10.2035 12.8161 9.90816 12.7684 9.60172 12.7684C8.00229 12.7684 6.70594 14.0643 6.70594 15.6627C6.70594 16.7928 7.35394 17.7714 8.29887 18.2481C8.69067 18.4456 9.13316 18.5569 9.60174 18.5569C11.1979 18.5569 12.492 17.2663 12.4975 15.6726V2H15.9425V2.44029C15.9546 2.57192 15.9721 2.70305 15.995 2.83332C16.234 4.19637 17.0495 5.36094 18.1813 6.06685C18.9413 6.54103 19.8196 6.79171 20.7154 6.79035L20.7153 10.2134Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default TiktokSize24;
