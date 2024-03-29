import * as React from 'react';
import { IconProps } from './types';

export const Underline12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M2.875 10.375H9.125M2.875 1.65625V5C2.875 6.7259 4.27411 8.125 6 8.125C7.7259 8.125 9.125 6.7259 9.125 5V1.65625"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Underline12;
