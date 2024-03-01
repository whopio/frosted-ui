import * as React from 'react';
import { IconProps } from './types';

export const Bell12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.25 6.66709V5C10.25 2.65279 8.34721 0.75 6 0.75C3.65279 0.75 1.75 2.65279 1.75 5V6.66709C1.75 7.4278 1.51785 8.1704 1.08457 8.79566L0.899441 9.06281C0.625032 9.4588 0.908443 10 1.39022 10H10.6098C11.0916 10 11.375 9.4588 11.1006 9.06281L10.9154 8.79566C10.4822 8.1704 10.25 7.4278 10.25 6.66709Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.25 10.75V10H4.75V10.75C4.75 11.4404 5.30964 12 6 12C6.69036 12 7.25 11.4404 7.25 10.75Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Bell12;
