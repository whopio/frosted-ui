import * as React from 'react';
import { IconProps } from './types';

export const LeaveReview20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.9445 0.883825C17.8706 -0.190116 16.1294 -0.190116 15.0555 0.883825L13.9948 1.94449L8.95534 6.98394C8.51379 7.42549 8.23566 8.00417 8.16671 8.6248L8.00106 10.1156C7.89137 11.1028 8.72553 11.937 9.71275 11.8273L11.2036 11.6617C11.8242 11.5927 12.4029 11.3146 12.8444 10.873L17.8839 5.83357L18.9445 4.77291C20.0185 3.69897 20.0185 1.95777 18.9445 0.883825ZM16.1161 1.94449C16.6043 1.45633 17.3957 1.45633 17.8839 1.94449C18.372 2.43264 18.372 3.2241 17.8839 3.71225L17.3536 4.24258L15.5858 2.47482L16.1161 1.94449ZM14.5251 3.53548L16.2929 5.30324L11.7838 9.81237C11.5831 10.0131 11.32 10.1395 11.0379 10.1708L9.5471 10.3365C9.51525 10.34 9.48835 10.3131 9.49188 10.2813L9.65753 8.79044C9.68888 8.50834 9.8153 8.2453 10.016 8.0446L14.5251 3.53548ZM1.5498 6.99994C1.5498 4.65273 3.45259 2.74994 5.7998 2.74994H8.7998C9.21402 2.74994 9.5498 2.41416 9.5498 1.99994C9.5498 1.58573 9.21402 1.24994 8.7998 1.24994H5.7998C2.62417 1.24994 0.0498047 3.8243 0.0498047 6.99994V12.9999C0.0498047 16.1756 2.62417 18.7499 5.7998 18.7499H11.7998C14.9754 18.7499 17.5498 16.1756 17.5498 12.9999V11.9999C17.5498 11.5857 17.214 11.2499 16.7998 11.2499C16.3856 11.2499 16.0498 11.5857 16.0498 11.9999V12.9999C16.0498 15.3472 14.147 17.2499 11.7998 17.2499H5.7998C3.45259 17.2499 1.5498 15.3472 1.5498 12.9999V6.99994Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default LeaveReview20;
