import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 12.0657C1 5.99054 5.92487 1.06567 12 1.06567C18.0751 1.06567 23 5.99054 23 12.0657C23 18.1408 18.0751 23.0657 12 23.0657C5.92487 23.0657 1 18.1408 1 12.0657ZM16.3037 7.69643C16.6942 8.08695 16.6942 8.72012 16.3037 9.11064L13.4143 12L16.3038 14.8894C16.6943 15.2799 16.6943 15.9131 16.3038 16.3036C15.9132 16.6941 15.2801 16.6941 14.8896 16.3036L12.0001 13.4142L9.11067 16.3036C8.72015 16.6941 8.08698 16.6941 7.69646 16.3036C7.30593 15.9131 7.30593 15.2799 7.69646 14.8894L10.5859 12L7.69657 9.11064C7.30604 8.72012 7.30604 8.08695 7.69657 7.69643C8.08709 7.3059 8.72026 7.3059 9.11078 7.69643L12.0001 10.5858L14.8894 7.69643C15.28 7.3059 15.9131 7.3059 16.3037 7.69643Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XCircleFilled24;
