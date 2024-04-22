import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.7889 3.43056C8.66355 2.82809 8.13945 1.375 6.00085 1.375C3.94529 1.375 3.17446 2.71171 3.17446 3.6875C3.17446 5.20635 4.57726 5.6029 6.00085 5.98285M2.98438 8.56945C3.1767 9.1719 3.86223 10.625 6.00085 10.625C8.0564 10.625 8.9557 9.2883 8.9557 8.3125C8.9557 7.9366 8.8698 7.6295 8.7189 7.3743M1.375 6H10.625"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough12;
