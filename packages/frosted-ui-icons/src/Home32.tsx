import * as React from 'react';
import { IconProps } from './types';

export const Home32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M29.75 27.91V13.0462C29.75 12.2274 29.3757 11.4536 28.7339 10.9453L18.0046 2.44767C17.4341 1.99585 16.7277 1.75 16 1.75C15.2723 1.75 14.5659 1.99585 13.9954 2.44767L3.26609 10.9453C2.62426 11.4536 2.25 12.2274 2.25 13.0462V27.91C2.25 28.6501 2.84994 29.25 3.59 29.25H8.91C9.65006 29.25 10.25 28.6501 10.25 27.91V23C10.25 19.8244 12.8244 17.25 16 17.25C19.1756 17.25 21.75 19.8244 21.75 23V27.91C21.75 28.6501 22.3499 29.25 23.09 29.25H28.41C29.1501 29.25 29.75 28.6501 29.75 27.91Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Home32;
