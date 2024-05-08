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
          d="M3.66091 7.44503C3.07946 8.12025 3.55919 9.1664 4.45025 9.1664H6.6666V16.8747C6.6666 17.6801 7.31951 18.3331 8.12493 18.3331H11.8749C12.6803 18.3331 13.3332 17.6801 13.3332 16.8747V9.1664H15.5496C16.4407 9.1664 16.9204 8.12025 16.3389 7.44503L11.105 1.3669C10.5232 0.691256 9.47666 0.691257 8.89483 1.3669L3.66091 7.44503Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled20;
