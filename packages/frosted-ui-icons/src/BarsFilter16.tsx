import * as React from 'react';
import { IconProps } from './types';

export const BarsFilter16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.625 4.25C.625 3.83579.960786 3.5 1.375 3.5H14.625C15.0392 3.5 15.375 3.83579 15.375 4.25 15.375 4.66421 15.0392 5 14.625 5H1.375C.960786 5 .625 4.66421.625 4.25zM2.625 8.25C2.625 7.83579 2.96079 7.5 3.375 7.5H12.625C13.0392 7.5 13.375 7.83579 13.375 8.25 13.375 8.66421 13.0392 9 12.625 9H3.375C2.96079 9 2.625 8.66421 2.625 8.25zM5.125 12.25C5.125 11.8358 5.46079 11.5 5.875 11.5H10.125C10.5392 11.5 10.875 11.8358 10.875 12.25 10.875 12.6642 10.5392 13 10.125 13H5.875C5.46079 13 5.125 12.6642 5.125 12.25z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default BarsFilter16;
