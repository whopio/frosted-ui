import * as React from 'react';
import { IconProps } from './types';

export const Component1924 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8.75L12 14.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="18" r="1" fill={color} />
        <path
          d="M13.6776 2.72991L22.9899 19.242C23.1604 19.5444 23.25 19.8857 23.25 20.2329C23.25 21.3469 22.3469 22.25 21.2329 22.25H2.76713C1.6531 22.25 0.75 21.3469 0.75 20.2329C0.75 19.8857 0.839606 19.5444 1.01015 19.242L10.3224 2.72991C10.6638 2.12449 11.3049 1.75 12 1.75C12.6951 1.75 13.3362 2.12449 13.6776 2.72991Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Component1924;
