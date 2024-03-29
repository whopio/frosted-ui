import * as React from 'react';
import { IconProps } from './types';

export const Trophy32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 29C10 28.5858 10.3358 28.25 10.75 28.25H21.25C21.6642 28.25 22 28.5858 22 29C22 29.4142 21.6642 29.75 21.25 29.75H10.75C10.3358 29.75 10 29.4142 10 29Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16 21.25C16.4142 21.25 16.75 21.5858 16.75 22V29C16.75 29.4142 16.4142 29.75 16 29.75C15.5858 29.75 15.25 29.4142 15.25 29V22C15.25 21.5858 15.5858 21.25 16 21.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.89796 4C8.67817 4 8.5 4.17817 8.5 4.39796V13.75C8.5 17.8921 11.8579 21.25 16 21.25C20.1421 21.25 23.5 17.8921 23.5 13.75V4.39795C23.5 4.17817 23.3218 4 23.102 4H8.89796ZM7 4.39796C7 3.34974 7.84974 2.5 8.89796 2.5H23.102C24.1503 2.5 25 3.34974 25 4.39795V13.75C25 18.7205 20.9706 22.75 16 22.75C11.0294 22.75 7 18.7205 7 13.75V4.39796Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M23.5 6.25C23.5 5.83579 23.8358 5.5 24.25 5.5H27.75C29.2688 5.5 30.5 6.73122 30.5 8.25V9.99998C30.5 12.6233 28.3734 14.75 25.75 14.75H24.25C23.8358 14.75 23.5 14.4142 23.5 14 23.5 13.5858 23.8358 13.25 24.25 13.25H25.75C27.5449 13.25 29 11.7949 29 9.99998V8.25C29 7.55965 28.4404 7 27.75 7H24.25C23.8358 7 23.5 6.66421 23.5 6.25zM8.5 6.25C8.5 5.83579 8.16421 5.5 7.75 5.5H4.25C2.73122 5.5 1.5 6.73122 1.5 8.25V9.99998C1.5 12.6233 3.62665 14.75 6.25 14.75H7.75C8.16421 14.75 8.5 14.4142 8.5 14 8.5 13.5858 8.16421 13.25 7.75 13.25H6.25C4.45507 13.25 3 11.7949 3 9.99998V8.25C3 7.55965 3.55965 7 4.25 7H7.75C8.16421 7 8.5 6.66421 8.5 6.25z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Trophy32;
