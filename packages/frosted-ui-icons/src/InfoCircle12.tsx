import * as React from 'react';
import { IconProps } from './types';

export const InfoCircle12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6ZM6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM4.75 4.5C4.33579 4.5 4 4.83579 4 5.25C4 5.66421 4.33579 6 4.75 6H5.25V7.49988H4.75C4.33579 7.49988 4 7.83566 4 8.24988C4 8.66409 4.33579 8.99988 4.75 8.99988H5.99408L6 8.9999L6.00592 8.99988H7.2499C7.66411 8.99988 7.9999 8.66409 7.9999 8.24988C7.9999 7.83566 7.66411 7.49988 7.2499 7.49988H6.75V5.25C6.75 4.83579 6.41421 4.5 6 4.5H4.75ZM5.75 4.00403C6.16421 4.00403 6.5 3.66824 6.5 3.25403C6.5 2.83981 6.16421 2.50403 5.75 2.50403C5.33579 2.50403 5 2.83981 5 3.25403C5 3.66824 5.33579 4.00403 5.75 4.00403Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default InfoCircle12;
