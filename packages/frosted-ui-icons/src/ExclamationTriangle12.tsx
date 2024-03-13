import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 4C6.41421 4 6.75 4.33579 6.75 4.75V6.75C6.75 7.16421 6.41421 7.5 6 7.5C5.58579 7.5 5.25 7.16421 5.25 6.75V4.75C5.25 4.33579 5.58579 4 6 4Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.75 9C6.75 9.41421 6.41421 9.75 6 9.75C5.58579 9.75 5.25 9.41421 5.25 9C5.25 8.58579 5.58579 8.25 6 8.25C6.41421 8.25 6.75 8.58579 6.75 9Z"
          fill={color}
        />
        <path
          d="M5.99998 2C5.7841 2 5.58653 2.12133 5.48889 2.31387L1.52799 10.1241C1.50959 10.1604 1.5 10.2005 1.5 10.2412C1.5 10.3841 1.61588 10.5 1.75882 10.5H10.2412C10.3841 10.5 10.5 10.3841 10.5 10.2412C10.5 10.2005 10.4904 10.1604 10.472 10.1241L6.51108 2.31387C6.41343 2.12133 6.21587 2 5.99998 2ZM4.15109 1.63542C4.50432 0.938898 5.21902 0.5 5.99998 0.5C6.78095 0.5 7.49564 0.938895 7.84888 1.63541L11.8098 9.44567C11.9348 9.69221 12 9.96475 12 10.2412C12 11.2126 11.2126 12 10.2412 12H1.75882C0.787448 12 0 11.2126 0 10.2412C0 9.96475 0.0651579 9.69221 0.190189 9.44567L4.15109 1.63542Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ExclamationTriangle12;
