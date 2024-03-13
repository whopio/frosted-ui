import * as React from 'react';
import { IconProps } from './types';

export const Cube24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.0002 12V20.5M12.0002 12L4.5 7.78123M12.0002 12L19.2627 7.91472M20.25 8.52905V15.4709C20.25 16.1935 19.8603 16.8598 19.2305 17.2141L12.9805 20.7297C12.3717 21.0722 11.6283 21.0722 11.0195 20.7297L4.76948 17.2141C4.13972 16.8598 3.75 16.1935 3.75 15.4709V8.52905C3.75 7.80651 4.13972 7.14014 4.76948 6.7859L11.0195 3.27028C11.6283 2.92781 12.3717 2.92781 12.9805 3.27028L19.2305 6.7859C19.8603 7.14014 20.25 7.80651 20.25 8.52905Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Cube24;
