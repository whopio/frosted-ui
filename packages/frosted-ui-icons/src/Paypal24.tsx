import * as React from 'react';
import { IconProps } from './types';

export const Paypal24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.1191 19.4124H5.62777C6.05068 19.4124 6.41933 19.1245 6.5219 18.7143L7.55532 14.5806C7.65789 14.1703 8.02653 13.8825 8.44945 13.8825H9.57314C17.5302 13.8825 18.6366 8.93473 18.7722 8.03218C18.7863 7.93821 18.7982 7.84655 18.8087 7.75211C18.8999 6.93629 19.0715 2.82269 13.2597 2.82269H7.36519C6.50124 2.82269 5.7532 3.42274 5.56578 4.26612L2.39934 18.5151C2.29702 18.9756 2.64741 19.4124 3.1191 19.4124Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.54706 19.4122L5.15216 21.2879C5.05568 21.7462 5.40532 22.1771 5.87363 22.1772L8.81759 22.1773C9.25695 22.1773 9.63523 21.8672 9.72139 21.4364L10.3467 18.3098C10.4328 17.879 10.8111 17.5689 11.2504 17.5689H12.3382C20.2563 17.5689 21.3906 11.9156 21.5351 10.8341C21.551 10.7156 21.5666 10.5994 21.5792 10.4804C21.6514 9.7981 21.6995 7.30635 18.7897 6.07819"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Paypal24;
