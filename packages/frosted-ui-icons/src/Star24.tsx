import * as React from 'react';
import { IconProps } from './types';

export const Star24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.2867 3.69529C11.5112 3.00431 12.4888 3.00431 12.7133 3.69529L14.4379 9.00305C14.5383 9.31207 14.8262 9.52129 15.1512 9.52129H20.7321C21.4586 9.52129 21.7607 10.451 21.1729 10.878L16.6579 14.1584C16.395 14.3494 16.285 14.6879 16.3854 14.997L18.11 20.3047C18.3345 20.9957 17.5436 21.5703 16.9559 21.1432L12.4408 17.8629C12.1779 17.6719 11.822 17.6719 11.5591 17.8629L7.04409 21.1432C6.4563 21.5703 5.66544 20.9957 5.88996 20.3047L7.61455 14.9969C7.71496 14.6879 7.60496 14.3494 7.3421 14.1584L2.82705 10.878C2.23926 10.451 2.54134 9.52129 3.26789 9.52129H8.84879C9.17371 9.52129 9.46168 9.31207 9.56209 9.00305L11.2867 3.69529Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star24;
