import * as React from 'react';
import { IconProps } from './types';

export const MoonSize16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.1654 7.87414C13.4593 8.37334 12.5972 8.66667 11.6667 8.66667C9.27341 8.66667 7.33334 6.7266 7.33334 4.33334C7.33334 3.40278 7.62668 2.54072 8.12588 1.8346C8.08401 1.83376 8.04208 1.83334 8.00001 1.83334C4.59426 1.83334 1.83334 4.59425 1.83334 8C1.83334 11.4057 4.59426 14.1667 8.00001 14.1667C11.4057 14.1667 14.1667 11.4057 14.1667 8C14.1667 7.95794 14.1663 7.916 14.1654 7.87414Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MoonSize16;
