import * as React from 'react';
import { IconProps } from './types';

export const Moon16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.1654 7.87414C13.4592 8.37334 12.5972 8.66668 11.6666 8.66668C9.27338 8.66668 7.33331 6.72661 7.33331 4.33334C7.33331 3.40278 7.62665 2.54073 8.12585 1.8346C8.08398 1.83376 8.04205 1.83334 7.99998 1.83334C4.59423 1.83334 1.83331 4.59426 1.83331 8.00001C1.83331 11.4057 4.59423 14.1667 7.99998 14.1667C11.4057 14.1667 14.1666 11.4057 14.1666 8.00001C14.1666 7.95794 14.1662 7.91601 14.1654 7.87414Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Moon16;
