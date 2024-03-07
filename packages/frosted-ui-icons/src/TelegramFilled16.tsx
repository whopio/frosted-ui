import * as React from 'react';
import { IconProps } from './types';

export const TelegramFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8 0.96875C11.7461 0.96875 14.7812 4.00391 14.7812 7.75C14.7812 11.4961 11.7461 14.5312 8 14.5312C4.25391 14.5312 1.21875 11.4961 1.21875 7.75C1.21875 4.00391 4.25391 0.96875 8 0.96875ZM11.3086 5.61719C11.418 5.17969 11.1445 4.98828 10.8438 5.09766L4.30859 7.61328C3.87109 7.77734 3.87109 8.05078 4.22656 8.16016L5.89453 8.67969L9.77734 6.21875C9.96875 6.10938 10.1328 6.19141 9.99609 6.30078L6.85156 9.14453L6.74219 10.8672C6.90625 10.8672 6.98828 10.7852 7.07031 10.7031L7.89062 9.91016L9.58594 11.168C9.91406 11.332 10.1328 11.25 10.2148 10.8672L11.3086 5.61719Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TelegramFilled16;
