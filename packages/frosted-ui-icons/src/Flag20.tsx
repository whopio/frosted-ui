import * as React from 'react';
import { IconProps } from './types';

export const Flag20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.95837 12.5694V3.66593C3.95837 3.34885 4.13812 3.0596 4.43244 2.94165C5.06489 2.68821 6.24131 2.29166 7.41076 2.29166C9.12946 2.29166 10.8706 4.00462 12.5893 4.00462C13.3763 4.00462 14.1665 3.82503 14.7919 3.63032C15.3817 3.44669 16.0417 3.87156 16.0417 4.4893V12.0517C16.0417 12.3687 15.862 12.658 15.5676 12.7759C14.9352 13.0294 13.7588 13.4259 12.5893 13.4259C10.8706 13.4259 9.12946 11.713 7.41076 11.713C5.69208 11.713 3.95837 12.5694 3.95837 12.5694ZM3.95837 12.5694V17.7083"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Flag20;
