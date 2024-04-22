import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.21275 9.47313L3.78892 9.95327L3.21275 9.47313C2.62475 10.1787 3.1265 11.25 4.04499 11.25H6.58331V17.1667C6.58331 17.765 7.06834 18.25 7.66665 18.25H12.3333C12.9316 18.25 13.4166 17.765 13.4166 17.1667V11.25H15.955C16.8735 11.25 17.3752 10.1787 16.7872 9.47313L10.8322 2.32715C10.3991 1.80741 9.60085 1.80742 9.16774 2.32715L9.74391 2.80729L9.16774 2.32715L3.21275 9.47313Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatUp20;
