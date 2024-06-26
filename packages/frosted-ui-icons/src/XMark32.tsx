import * as React from 'react';
import { IconProps } from './types';

export const XMark32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M25.1924 7.86822C25.4853 7.57533 25.4853 7.10045 25.1924 6.80756C24.8995 6.51467 24.4246 6.51467 24.1317 6.80756L15.9999 14.9393L7.86827 6.80766C7.57537 6.51477 7.1005 6.51477 6.80761 6.80766C6.51471 7.10056 6.51471 7.57543 6.80761 7.86832L14.9393 16L6.80761 24.1317C6.51472 24.4246 6.51472 24.8994 6.80761 25.1923C7.1005 25.4852 7.57538 25.4852 7.86827 25.1923L15.9999 17.0607L24.1317 25.1924C24.4246 25.4853 24.8995 25.4853 25.1924 25.1924C25.4853 24.8995 25.4853 24.4247 25.1924 24.1318L17.0606 16L25.1924 7.86822Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark32;
