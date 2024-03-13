import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.2043 4.00776C21.1084 4.28763 21.8189 5.10925 22.0609 6.15475C22.4982 8.04786 22.5 12 22.5 12C22.5 12 22.5 15.9522 22.0609 17.8453C21.8189 18.8908 21.1084 19.7124 20.2043 19.9922C18.5673 20.5 12 20.5 12 20.5C12 20.5 5.43274 20.5 3.79568 19.9922C2.89159 19.7124 2.1811 18.8908 1.93908 17.8453C1.5 15.9522 1.5 12 1.5 12C1.5 12 1.5 8.04786 1.93908 6.15475C2.1811 5.10925 2.89159 4.28763 3.79568 4.00776C5.43274 3.5 12 3.5 12 3.5C12 3.5 18.5673 3.5 20.2043 4.00776ZM15.5134 12.0003L9.79785 15.2999V8.70065L15.5134 12.0003Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default YoutubeFilled24;
