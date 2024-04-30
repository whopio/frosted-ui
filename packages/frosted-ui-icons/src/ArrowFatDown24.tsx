import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.2499 2.75H9.74994C9.19765 2.75 8.74994 3.19771 8.74994 3.75V13.75H5.34032C4.91261 13.75 4.68235 14.2522 4.96144 14.5763L11.2422 21.87C11.6411 22.3333 12.3587 22.3333 12.7577 21.87L19.0384 14.5763C19.3175 14.2522 19.0873 13.75 18.6595 13.75H15.2499V3.75C15.2499 3.19772 14.8022 2.75 14.2499 2.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatDown24;
