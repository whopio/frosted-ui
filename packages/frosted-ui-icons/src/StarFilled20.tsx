import * as React from 'react';
import { IconProps } from './types';

export const StarFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.808 8.07452C18.643 7.56152 18.208 7.19953 17.672 7.12753L13.193 6.54251L11.248 2.49152C11.016 2.00852 10.537 1.70752 10.001 1.70752C9.465 1.70752 8.986 2.00852 8.754 2.49152L6.808 6.54251L2.329 7.12851C1.794 7.19951 1.358 7.56252 1.193 8.07452C1.029 8.58552 1.17 9.13151 1.56 9.49951L4.832 12.5865L4.011 16.9915C3.913 17.5185 4.121 18.0425 4.555 18.3575C4.99 18.6745 5.555 18.7125 6.027 18.4575L10.002 16.3145L13.977 18.4575C14.185 18.5695 14.411 18.6255 14.635 18.6255C14.921 18.6255 15.205 18.5355 15.448 18.3575C15.882 18.0425 16.09 17.5185 15.992 16.9905L15.171 12.5855L18.443 9.49951C18.834 9.13151 18.973 8.58552 18.808 8.07452Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default StarFilled20;
