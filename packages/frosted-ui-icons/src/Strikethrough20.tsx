import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.6482 5.71758C14.4393 4.71347 13.5658 2.29166 10.0015 2.29166C6.57557 2.29166 5.29085 4.5195 5.29085 6.14582C5.29085 8.67724 7.62885 9.33816 10.0015 9.97141M4.97404 14.2824C5.29458 15.2865 6.43713 17.7083 10.0015 17.7083C13.4274 17.7083 14.9262 15.4805 14.9262 13.8542C14.9262 13.2277 14.7831 12.7158 14.5316 12.2905M2.29175 9.99999H17.7084"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough20;
