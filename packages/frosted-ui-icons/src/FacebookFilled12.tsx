import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.8438 6.25C10.8438 8.67188 9.06641 10.6836 6.74219 11.0352V7.65625H7.875L8.08984 6.25H6.74219V5.35156C6.74219 4.96094 6.9375 4.58984 7.54297 4.58984H8.14844V3.39844C8.14844 3.39844 7.60156 3.30078 7.05469 3.30078C5.96094 3.30078 5.23828 3.98438 5.23828 5.19531V6.25H4.00781V7.65625H5.23828V11.0352C2.91406 10.6836 1.15625 8.67188 1.15625 6.25C1.15625 3.57422 3.32422 1.40625 6 1.40625C8.67578 1.40625 10.8438 3.57422 10.8438 6.25Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled12;
