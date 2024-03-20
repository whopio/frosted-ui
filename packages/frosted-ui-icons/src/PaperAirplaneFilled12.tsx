import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.7138 5.531L0.7314 0.0535968C0.332852 -0.144552 -0.107244 0.239165 0.0235541 0.673205L1.53465 5.0199C1.5962 5.22277 1.77163 5.36745 1.97936 5.38475L7.14356 6.00121L1.97936 6.61767C1.77163 6.63497 1.5962 6.77965 1.53465 6.98252L0.0235541 11.3276C-0.107244 11.7617 0.331313 12.1454 0.7314 11.9457L11.7153 6.46828C11.9169 6.36763 12 6.22452 12 5.99964C12 5.77475 11.9184 5.63165 11.7153 5.531H11.7138Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PaperAirplaneFilled12;
