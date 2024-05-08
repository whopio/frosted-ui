import * as React from 'react';
import { IconProps } from './types';

export const Cursor16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.82978 3.31926C1.5016 2.39378 2.39378 1.5016 3.31926 1.82978L13.8708 5.5713C14.8769 5.92805 14.9152 7.33662 13.9301 7.74762L10.7318 9.08186L13.4083 11.7583C13.8639 12.2139 13.8639 12.9526 13.4083 13.4083C12.9527 13.8639 12.214 13.8639 11.7583 13.4083L9.08187 10.7318L7.74763 13.9301C7.33663 14.9152 5.92805 14.8769 5.5713 13.8708L1.82978 3.31926Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Cursor16;
