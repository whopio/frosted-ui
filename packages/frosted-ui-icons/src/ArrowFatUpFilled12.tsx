import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.19655 4.46703C1.84768 4.87216 2.13552 5.49985 2.67016 5.49985H3.99996V10.1248C3.99996 10.6081 4.39171 10.9998 4.87496 10.9998H7.12495C7.6082 10.9998 7.99995 10.6081 7.99995 10.1248V5.49985H9.32975C9.8644 5.49985 10.1523 4.87216 9.80335 4.46703L6.663 0.820155C6.3139 0.414766 5.686 0.414767 5.3369 0.820155L2.19655 4.46703Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled12;
