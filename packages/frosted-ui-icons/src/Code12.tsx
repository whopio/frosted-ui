import * as React from 'react';
import { IconProps } from './types';

export const Code12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.87498 10.125L7.12498 1.875M9.12498 3.875L10.4799 5.31465C10.8423 5.6997 10.8423 6.3003 10.4799 6.68535L9.12498 8.125M2.87498 8.125L1.52003 6.68535C1.15763 6.3003 1.15763 5.6997 1.52003 5.31465L2.87498 3.875"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Code12;
