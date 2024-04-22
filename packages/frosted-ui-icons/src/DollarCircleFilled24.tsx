import * as React from 'react';
import { IconProps } from './types';

export const DollarCircleFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM7 9.875C7 8.28718 8.28718 7 9.875 7H11.25V5.75C11.25 5.33579 11.5858 5 12 5C12.4142 5 12.75 5.33579 12.75 5.75V7H15.75C16.1642 7 16.5 7.33579 16.5 7.75C16.5 8.16421 16.1642 8.5 15.75 8.5H12.75V11.25H14.125C15.7128 11.25 17 12.5372 17 14.125C17 15.7128 15.7128 17 14.125 17H12.75V18.25C12.75 18.6642 12.4142 19 12 19C11.5858 19 11.25 18.6642 11.25 18.25V17H8.25C7.83579 17 7.5 16.6642 7.5 16.25C7.5 15.8358 7.83579 15.5 8.25 15.5H11.25V12.75H9.875C8.28718 12.75 7 11.4628 7 9.875ZM11.25 11.25V8.5H9.875C9.11561 8.5 8.5 9.11561 8.5 9.875C8.5 10.6344 9.11561 11.25 9.875 11.25H11.25ZM12.75 12.75V15.5H14.125C14.8844 15.5 15.5 14.8844 15.5 14.125C15.5 13.3656 14.8844 12.75 14.125 12.75H12.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default DollarCircleFilled24;
