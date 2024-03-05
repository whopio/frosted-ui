import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircle12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="6"
          cy="6"
          r="5.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 7V6.29545C6 5.88124 6.33579 5.54545 6.75 5.54545V5.54545C7.44036 5.54545 8 4.97455 8 4.28419V4.28419C8 3.58129 7.43018 3 6.72727 3H5.09091C4.48842 3 4 3.48842 4 4.09091V4.09091"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="9" r="1" fill={color} />
      </svg>
    );
  },
);

export default QuestionCircle12;
