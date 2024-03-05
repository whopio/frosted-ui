import * as React from 'react';
import { IconProps } from './types';

export const Trophy20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.75 3.5C6.33579 3.5 6 3.83579 6 4.25V8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8V4.25C14 3.83579 13.6642 3.5 13.25 3.5H6.75ZM4 5.5H4.5V8H4C3.30964 8 2.75 7.44036 2.75 6.75C2.75 6.05964 3.30964 5.5 4 5.5ZM9.25 13.4493C7.06849 13.1518 5.29398 11.5752 4.70703 9.5H4C2.48122 9.5 1.25 8.26878 1.25 6.75C1.25 5.23122 2.48122 4 4 4H4.51373C4.63809 2.87501 5.59186 2 6.75 2H13.25C14.4081 2 15.3619 2.87501 15.4863 4H16C17.5188 4 18.75 5.23122 18.75 6.75C18.75 8.26878 17.5188 9.5 16 9.5H15.293C14.706 11.5752 12.9315 13.1518 10.75 13.4493V16.5H13.25C13.6642 16.5 14 16.8358 14 17.25C14 17.6642 13.6642 18 13.25 18H10H6.75C6.33579 18 6 17.6642 6 17.25C6 16.8358 6.33579 16.5 6.75 16.5H9.25V13.4493ZM15.5 8H16C16.6904 8 17.25 7.44036 17.25 6.75C17.25 6.05964 16.6904 5.5 16 5.5H15.5V8Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Trophy20;
