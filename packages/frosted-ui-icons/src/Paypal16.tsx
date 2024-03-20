import * as React from 'react';
import { IconProps } from './types';

export const Paypal16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.07941 12.9416H3.75186C4.0338 12.9416 4.27956 12.7497 4.34794 12.4762L5.03689 9.72041C5.10527 9.44688 5.35103 9.255 5.63297 9.255H6.3821C11.6868 9.255 12.4244 5.9565 12.5148 5.3548C12.5242 5.29215 12.5321 5.23104 12.5392 5.16809C12.6 4.6242 12.7144 1.88181 8.83984 1.88181H4.91014C4.33417 1.88181 3.83548 2.28184 3.71053 2.84409L1.59957 12.3434C1.53136 12.6504 1.76495 12.9416 2.07941 12.9416Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.698 12.9414L3.43473 14.192C3.37041 14.4975 3.6035 14.7848 3.91571 14.7848L5.87836 14.7849C6.17126 14.7849 6.42345 14.5781 6.48089 14.2909L6.89775 12.2065C6.95519 11.9193 7.20736 11.7126 7.50025 11.7126H8.2254C13.5042 11.7126 14.2604 7.94376 14.3567 7.22276C14.3673 7.1437 14.3777 7.06623 14.3861 6.98691C14.4342 6.53206 14.4663 4.8709 12.5264 4.05212"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Paypal16;
