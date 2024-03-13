import * as React from 'react';
import { IconProps } from './types';

export const BarsFilter12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.375 3.25C.375 2.83579.710786 2.5 1.125 2.5H10.875C11.2892 2.5 11.625 2.83579 11.625 3.25 11.625 3.66421 11.2892 4 10.875 4H1.125C.710786 4 .375 3.66421.375 3.25zM1.875 6.25C1.875 5.83579 2.21079 5.5 2.625 5.5H9.375C9.78921 5.5 10.125 5.83579 10.125 6.25 10.125 6.66421 9.78921 7 9.375 7H2.625C2.21079 7 1.875 6.66421 1.875 6.25zM3.625 9.25C3.625 8.83579 3.96079 8.5 4.375 8.5H7.625C8.03921 8.5 8.375 8.83579 8.375 9.25 8.375 9.66421 8.03921 10 7.625 10H4.375C3.96079 10 3.625 9.66421 3.625 9.25z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default BarsFilter12;
