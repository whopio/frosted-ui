import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircle24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 15.25V14.5C12 13.8096 12.5799 13.2726 13.2197 13.0134C14.4103 12.531 15.25 11.3636 15.25 10C15.25 8.20507 13.7949 6.75 12 6.75C10.2051 6.75 8.75 8.20507 8.75 10V10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="18" r="1" fill={color} />
        <circle
          cx="12"
          cy="12"
          r="10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default QuestionCircle24;
