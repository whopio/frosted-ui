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
          d="M5.52448 1.71353C5.67416 1.25287 6.32586 1.25287 6.47554 1.71353L7.315 4.29712C7.38193 4.50313 7.57391 4.64261 7.79053 4.64261H10.5071C10.9914 4.64261 11.1928 5.26242 10.801 5.54712L8.60323 7.14387C8.42799 7.27119 8.35466 7.49687 8.4216 7.70288L9.26106 10.2865C9.41073 10.7471 8.88349 11.1302 8.49164 10.8455L6.2939 9.24874C6.11866 9.12142 5.88136 9.12142 5.70612 9.24874L3.50838 10.8455C3.11652 11.1302 2.58928 10.7471 2.73896 10.2865L3.57842 7.70288C3.64536 7.49687 3.57203 7.27119 3.39679 7.14387L1.19905 5.54712C0.807193 5.26242 1.00858 4.64261 1.49294 4.64261H4.20949C4.42611 4.64261 4.61808 4.50313 4.68502 4.29712L5.52448 1.71353Z"
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
