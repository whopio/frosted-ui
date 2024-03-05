import * as React from 'react';
import { IconProps } from './types';

export const TikTokFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.75 10.7031H20.7109C18.9141 10.7031 17.2734 10.1562 15.9453 9.17969V16.1719C15.9453 19.6875 13.0938 22.5 9.57812 22.5C6.0625 22.5 3.25 19.6875 3.25 16.1719C3.25 12.6562 6.0625 9.80469 9.57812 9.80469C9.89062 9.80469 10.1641 9.84375 10.4766 9.88281V13.3984C10.1641 13.2812 9.89062 13.2422 9.57812 13.2422C7.97656 13.2422 6.64844 14.5703 6.64844 16.1719C6.64844 17.7734 7.97656 19.1016 9.57812 19.1016C11.1797 19.1016 12.5078 17.7734 12.5078 16.1719V2.5H15.9453C15.9453 2.53906 15.9453 2.53906 15.9453 2.57812C15.9453 2.85156 15.9453 3.125 16.0234 3.39844C16.2578 4.6875 17.0391 5.82031 18.1328 6.52344C18.875 7.03125 19.7734 7.30469 20.7109 7.30469C20.7109 7.30469 20.7109 7.30469 20.75 7.30469V10.7031Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TikTokFilled24;
