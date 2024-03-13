import * as React from 'react';
import { IconProps } from './types';

export const Message24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 5.75C2.75 4.64543 3.64543 3.75 4.75 3.75H19.25C20.3546 3.75 21.25 4.64543 21.25 5.75V16.25C21.25 17.3546 20.3546 18.25 19.25 18.25H15.3759C15.143 18.25 14.9173 18.3313 14.738 18.4799L12.6397 20.2183C12.2679 20.5263 11.7292 20.5248 11.3593 20.2147L9.29422 18.4836C9.11418 18.3327 8.88675 18.25 8.65182 18.25H4.75C3.64543 18.25 2.75 17.3546 2.75 16.25V5.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6.625 11C6.625 11.4832 7.01675 11.875 7.5 11.875C7.98325 11.875 8.375 11.4832 8.375 11C8.375 10.5168 7.98325 10.125 7.5 10.125C7.01675 10.125 6.625 10.5168 6.625 11ZM11.125 11C11.125 11.4832 11.5168 11.875 12 11.875C12.4832 11.875 12.875 11.4832 12.875 11C12.875 10.5168 12.4832 10.125 12 10.125C11.5168 10.125 11.125 10.5168 11.125 11ZM15.625 11C15.625 11.4832 16.0168 11.875 16.5 11.875C16.9832 11.875 17.375 11.4832 17.375 11C17.375 10.5168 16.9832 10.125 16.5 10.125C16.0168 10.125 15.625 10.5168 15.625 11Z"
          fill={color}
          stroke={color}
          strokeWidth=".75"
          strokeLinecap="square"
        />
      </svg>
    );
  },
);

export default Message24;
