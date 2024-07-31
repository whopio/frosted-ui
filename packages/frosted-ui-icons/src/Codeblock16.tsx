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
          d="M9.16667 10L10.6953 8.4714C10.9556 8.21107 10.9556 7.78893 10.6953 7.5286L9.16667 6M6.83333 10L5.30473 8.4714C5.0444 8.21107 5.0444 7.78893 5.30473 7.5286L6.83333 6M12.1667 2.5L3.83333 2.5C3.09693 2.5 2.5 3.09693 2.5 3.83333L2.5 12.1667C2.5 12.903 3.09693 13.5 3.83333 13.5L12.1667 13.5C12.903 13.5 13.5 12.903 13.5 12.1667L13.5 3.83333C13.5 3.09693 12.903 2.5 12.1667 2.5Z"
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
