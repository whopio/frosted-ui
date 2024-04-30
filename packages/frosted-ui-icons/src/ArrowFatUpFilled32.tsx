import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.85745 11.9121C4.92713 12.9925 5.69469 14.6663 7.1204 14.6663H10.6665V26.9996C10.6665 28.2883 11.7112 29.333 12.9999 29.333H18.9998C20.2885 29.333 21.3332 28.2883 21.3332 26.9996V14.6663H24.8793C26.305 14.6663 27.0727 12.9925 26.1423 11.9121L17.768 2.18712C16.837 1.10608 15.1626 1.10608 14.2317 2.18712L5.85745 11.9121Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled32;
