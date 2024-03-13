import * as React from 'react';
import { IconProps } from './types';

export const BarsFilter24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.375 6.25C1.375 5.83579 1.71079 5.5 2.125 5.5H21.875C22.2892 5.5 22.625 5.83579 22.625 6.25 22.625 6.66421 22.2892 7 21.875 7H2.125C1.71079 7 1.375 6.66421 1.375 6.25zM4.375 12.25C4.375 11.8358 4.71079 11.5 5.125 11.5H18.875C19.2892 11.5 19.625 11.8358 19.625 12.25 19.625 12.6642 19.2892 13 18.875 13H5.125C4.71079 13 4.375 12.6642 4.375 12.25zM8.125 18.25C8.125 17.8358 8.46079 17.5 8.875 17.5H15.125C15.5392 17.5 15.875 17.8358 15.875 18.25 15.875 18.6642 15.5392 19 15.125 19H8.875C8.46079 19 8.125 18.6642 8.125 18.25z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default BarsFilter24;
