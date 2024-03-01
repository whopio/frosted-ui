import * as React from 'react';
import { IconProps } from './types';

export const Home16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.75 13.59V6.37653C14.75 5.98005 14.5718 5.60458 14.2646 5.35389L9.1069 1.14437C8.79439 0.889308 8.40338 0.75 8 0.75C7.59662 0.75 7.20561 0.889308 6.8931 1.14437L1.73537 5.35389C1.42821 5.60458 1.25 5.98005 1.25 6.37653V13.59C1.25 13.9545 1.54549 14.25 1.91 14.25H4.59C4.95451 14.25 5.25 13.9545 5.25 13.59V11C5.25 9.48124 6.48122 8.25002 8 8.25002C9.51878 8.25002 10.75 9.48124 10.75 11V13.59C10.75 13.9545 11.0455 14.25 11.41 14.25H14.09C14.4545 14.25 14.75 13.9545 14.75 13.59Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Home16;
