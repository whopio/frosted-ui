import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_1444)">
          <path
            d="M1.6875 8C0.75552 8 0 7.24448 0 6.3125V2.25C0 1.83579 0.335787 1.5 0.75 1.5C1.16421 1.5 1.5 1.83579 1.5 2.25V6.3125C1.5 6.41605 1.58395 6.5 1.6875 6.5H9.47126L8.2755 5.27358C7.98634 4.977 7.99235 4.50216 8.28892 4.213C8.5855 3.92384 9.06034 3.92985 9.3495 4.22642L11.787 6.72643C12.071 7.01771 12.071 7.48229 11.787 7.77357L9.3495 10.2736C9.06034 10.5702 8.5855 10.5762 8.28892 10.287C7.99235 9.99784 7.98634 9.523 8.2755 9.22642L9.47126 8H1.6875Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_1444">
            <path
              fill={color}
              transform="matrix(-1 0 0 1 12 0)"
              d="M0 0H12V12H0z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ArrowDownAngleRight12;
