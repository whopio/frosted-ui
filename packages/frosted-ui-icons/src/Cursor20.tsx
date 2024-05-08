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
          d="M2.28725 4.14917C1.87704 2.99232 2.99226 1.8771 4.14911 2.28731L17.3385 6.96422C18.5961 7.41015 18.644 9.17087 17.4127 9.68462L13.4148 11.3524L16.7604 14.698C17.3299 15.2675 17.3299 16.1909 16.7604 16.7604C16.1908 17.3299 15.2675 17.3299 14.698 16.7604L11.3524 13.4148L9.68457 17.4127C9.17082 18.6441 7.41009 18.5962 6.96416 17.3386L2.28725 4.14917Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Cursor20;
