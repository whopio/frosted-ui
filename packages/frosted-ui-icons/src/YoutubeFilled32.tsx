import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.9391 5.34364C28.1445 5.7168 29.0919 6.81229 29.4145 8.20629C29.9976 10.7304 30 16 30 16C30 16 30 21.2696 29.4145 23.7937C29.0919 25.1877 28.1445 26.2832 26.9391 26.6562C24.7564 27.3333 16 27.3333 16 27.3333C16 27.3333 7.24365 27.3333 5.06091 26.6562C3.85545 26.2832 2.90813 25.1877 2.58544 23.7937C2 21.2696 2 16 2 16C2 16 2 10.7304 2.58544 8.20629C2.90813 6.81229 3.85545 5.7168 5.06091 5.34364C7.24365 4.66663 16 4.66663 16 4.66663C16 4.66663 24.7564 4.66663 26.9391 5.34364ZM20.6845 16.0004L13.0638 20.3998V11.6008L20.6845 16.0004Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default YoutubeFilled32;
