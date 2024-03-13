import * as React from 'react';
import { IconProps } from './types';

export const YoutubeSize24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.2043 4.00776C21.1084 4.28763 21.8189 5.10925 22.0609 6.15475C22.4982 8.04786 22.5 12 22.5 12C22.5 12 22.5 15.9522 22.0609 17.8453C21.8189 18.8908 21.1084 19.7124 20.2043 19.9922C18.5673 20.5 12 20.5 12 20.5C12 20.5 5.43274 20.5 3.79568 19.9922C2.89159 19.7124 2.1811 18.8908 1.93908 17.8453C1.5 15.9522 1.5 12 1.5 12C1.5 12 1.5 8.04786 1.93908 6.15475C2.1811 5.10925 2.89159 4.28763 3.79568 4.00776C5.43274 3.5 12 3.5 12 3.5C12 3.5 18.5673 3.5 20.2043 4.00776ZM15.1384 11.7838C15.305 11.88 15.305 12.1206 15.1384 12.2168L10.1728 15.0834C10.0062 15.1796 9.79785 15.0594 9.79785 14.8669V9.13365C9.79785 8.9412 10.0062 8.82092 10.1728 8.91714L15.1384 11.7838Z"
          stroke={color}
          clipRule="evenodd"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default YoutubeSize24;
