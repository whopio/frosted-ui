import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircle12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="6"
        height="7"
        viewBox="0 0 6 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.25 6.25V5.1875C2.25 4.66973 2.66973 4.25 3.1875 4.25V4.25C4.05044 4.25 4.75 3.55044 4.75 2.6875V2.5C4.75 1.5335 3.9665 0.75 3 0.75H2.25C1.42157 0.75 0.75 1.42157 0.75 2.25V2.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default QuestionCircle12;
