import * as React from 'react';
import { IconProps } from './types';

export const InfoOutline20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9 4C9 3.44772 9.44772 3 10 3C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55228 9 4ZM10 1.5C8.61929 1.5 7.5 2.61929 7.5 4C7.5 5.38071 8.61929 6.5 10 6.5C11.3807 6.5 12.5 5.38071 12.5 4C12.5 2.61929 11.3807 1.5 10 1.5ZM7.5 7.5C7.08579 7.5 6.75 7.83579 6.75 8.25C6.75 8.66421 7.08579 9 7.5 9H8V17H7.5C7.08579 17 6.75 17.3358 6.75 17.75C6.75 18.1642 7.08579 18.5 7.5 18.5H8.75H11.75H13C13.4142 18.5 13.75 18.1642 13.75 17.75C13.75 17.3358 13.4142 17 13 17H12.5V8.25C12.5 7.83579 12.1642 7.5 11.75 7.5H8.75H7.5ZM11 17L9.5 17V9H11V17Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default InfoOutline20;
