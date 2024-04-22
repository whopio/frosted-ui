import * as React from 'react';
import { IconProps } from './types';

export const Upload20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5417 4.95832L10.5893 2.00591C10.2638 1.68049 9.73618 1.68049 9.41076 2.00591L6.45834 4.95832M10 13.7083V2.04166M16.0417 17.2917H3.95834"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Upload20;
