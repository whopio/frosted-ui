import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.66096 7.44509C3.07951 8.12032 3.55923 9.16646 4.4503 9.16646H6.66664V16.8748C6.66664 17.6802 7.31956 18.3331 8.12498 18.3331H11.875C12.6804 18.3331 13.3333 17.6802 13.3333 16.8748V9.16646H15.5496C16.4407 9.16646 16.9205 8.12032 16.339 7.44509L11.105 1.36697C10.5232 0.691317 9.47671 0.691318 8.89488 1.36697L3.66096 7.44509Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled20;
