import * as React from 'react';
import { IconProps } from './types';

export const Tiktok16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.8102 6.80891C12.6238 6.80891 11.5253 6.43195 10.6283 5.7913V10.4484C10.6283 12.778 8.7388 14.6666 6.40801 14.6666C5.53835 14.6666 4.73003 14.4038 4.05856 13.9532C2.93033 13.196 2.1875 11.9086 2.1875 10.4484C2.1875 8.11885 4.07707 6.23027 6.40807 6.23031C6.60179 6.23022 6.79527 6.24337 6.98713 6.26959V6.78665L6.98707 8.60265C6.80233 8.54405 6.60544 8.51225 6.40115 8.51225C5.33486 8.51225 4.47063 9.37618 4.47063 10.4418C4.47063 11.1952 4.90263 11.8476 5.53258 12.1654C5.79378 12.297 6.08877 12.3712 6.40116 12.3712C7.46527 12.3712 8.328 11.5108 8.33167 10.4484V1.33331H10.6283V1.62684C10.6364 1.71459 10.6481 1.80201 10.6633 1.88886C10.8227 2.79756 11.3663 3.57394 12.1209 4.04455C12.6275 4.36067 13.2131 4.52779 13.8103 4.52688L13.8102 6.80891Z"
          stroke={color}
        />
      </svg>
    );
  },
);

export default Tiktok16;
