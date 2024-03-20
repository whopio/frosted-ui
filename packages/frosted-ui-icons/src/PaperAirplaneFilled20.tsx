import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.523 9.21833L1.219 0.089328C0.554753 -0.24092 -0.178739 0.398608 0.0392569 1.12201L2.55775 8.3665C2.66034 8.70461 2.95271 8.94575 3.29894 8.97458L11.9059 10.002L3.29894 11.0295C2.95271 11.0583 2.66034 11.2994 2.55775 11.6375L0.0392569 18.8794C-0.178739 19.6028 0.552189 20.2423 1.219 19.9095L19.5255 10.7805C19.8615 10.6127 20 10.3742 20 9.99939C20 9.62459 19.8641 9.38608 19.5255 9.21833H19.523Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PaperAirplaneFilled20;
