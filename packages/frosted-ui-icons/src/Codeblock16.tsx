import * as React from 'react';
import { IconProps } from './types';

export const Codeblock16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.83333 6L5.30474 7.5286C5.04439 7.78893 5.04439 8.21107 5.30474 8.4714L6.83333 10M9.16667 6L10.6953 7.5286C10.9556 7.78893 10.9556 8.21107 10.6953 8.4714L9.16667 10M3.83333 13.5H12.1667C12.9031 13.5 13.5 12.9031 13.5 12.1667V3.83333C13.5 3.09695 12.9031 2.5 12.1667 2.5H3.83333C3.09695 2.5 2.5 3.09695 2.5 3.83333V12.1667C2.5 12.9031 3.09695 13.5 3.83333 13.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Codeblock16;
