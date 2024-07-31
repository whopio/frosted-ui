import * as React from 'react';
import { IconProps } from './types';

export const Cursor20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.28731 4.14917C1.8771 2.99232 2.99232 1.8771 4.14917 2.28731L17.3386 6.96422C18.5962 7.41015 18.6441 9.17087 17.4127 9.68462L13.4148 11.3524L16.7604 14.698C17.3299 15.2675 17.3299 16.1909 16.7604 16.7604C16.1909 17.3299 15.2675 17.3299 14.698 16.7604L11.3524 13.4148L9.68463 17.4127C9.17088 18.6441 7.41015 18.5962 6.96422 17.3386L2.28731 4.14917Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Cursor20;
