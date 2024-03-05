import * as React from 'react';
import { IconProps } from './types';

export const YouTubeFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.1953 7.38281C22.6641 9.02344 22.6641 12.5391 22.6641 12.5391C22.6641 12.5391 22.6641 16.0156 22.1953 17.6953C21.9609 18.6328 21.2188 19.3359 20.3203 19.5703C18.6406 20 12 20 12 20C12 20 5.32031 20 3.64062 19.5703C2.74219 19.3359 2 18.6328 1.76562 17.6953C1.29688 16.0156 1.29688 12.5391 1.29688 12.5391C1.29688 12.5391 1.29688 9.02344 1.76562 7.38281C2 6.44531 2.74219 5.70312 3.64062 5.46875C5.32031 5 12 5 12 5C12 5 18.6406 5 20.3203 5.46875C21.2188 5.70312 21.9609 6.44531 22.1953 7.38281ZM9.8125 15.7031L15.3594 12.5391L9.8125 9.375V15.7031Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default YouTubeFilled24;
