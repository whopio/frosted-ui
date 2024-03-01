import * as React from 'react';
import { IconProps } from './types';

export const Star12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.52442 1.71353C5.6741 1.25287 6.3258 1.25287 6.47548 1.71353L7.31494 4.29712C7.38187 4.50313 7.57385 4.64261 7.79046 4.64261H10.507C10.9914 4.64261 11.1928 5.26242 10.8009 5.54712L8.60317 7.14387C8.42793 7.27119 8.3546 7.49687 8.42154 7.70288L9.261 10.2865C9.41067 10.7471 8.88343 11.1302 8.49158 10.8455L6.29384 9.24874C6.1186 9.12142 5.8813 9.12142 5.70606 9.24874L3.50832 10.8455C3.11646 11.1302 2.58922 10.7471 2.7389 10.2865L3.57836 7.70288C3.6453 7.49687 3.57197 7.27119 3.39672 7.14387L1.19899 5.54712C0.807132 5.26242 1.00852 4.64261 1.49288 4.64261H4.20943C4.42605 4.64261 4.61802 4.50313 4.68496 4.29712L5.52442 1.71353Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star12;
