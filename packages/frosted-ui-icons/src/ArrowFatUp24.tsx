import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.2499 21.2502H9.74994C9.19765 21.2502 8.74994 20.8025 8.74994 20.2502V10.2502H5.34032C4.91261 10.2502 4.68235 9.74805 4.96144 9.42394L11.2422 2.13019C11.6411 1.66689 12.3587 1.66689 12.7577 2.13019L19.0384 9.42394C19.3175 9.74805 19.0873 10.2502 18.6595 10.2502H15.2499V20.2502C15.2499 20.8025 14.8022 21.2502 14.2499 21.2502Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatUp24;
