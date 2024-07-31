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
          d="M5.99998 0C3.23855 0 0.999978 2.23858 0.999978 5V6.66709C0.999978 7.27514 0.814418 7.8687 0.468092 8.36847L0.282965 8.63563C-0.336122 9.52902 0.303275 10.75 1.3902 10.75H4.74998C4.74998 11.4404 5.30962 12 5.99998 12C6.69033 12 7.24998 11.4404 7.24998 10.75H10.6098C11.6967 10.75 12.3361 9.52902 11.717 8.63563L11.5319 8.36847C11.1855 7.8687 11 7.27514 11 6.66709V5C11 2.23858 8.7614 0 5.99998 0ZM2.49998 5C2.49998 3.067 4.06698 1.5 5.99998 1.5C7.93298 1.5 9.49998 3.067 9.49998 5V6.66709C9.49998 7.58047 9.77872 8.4721 10.299 9.22284L10.3178 9.25H1.68218L1.701 9.22284C2.22124 8.4721 2.49998 7.58047 2.49998 6.66709V5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Bell12;
