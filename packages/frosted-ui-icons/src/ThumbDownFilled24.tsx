import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.42149 14H3.75C2.78352 14 2 13.2165 2 12.25V4.75C2 3.78348 2.78352 3 3.75 3H17.422C19.2752 3 20.8505 4.35375 21.1293 6.18586L21.9663 11.6859C22.3116 13.9555 20.5548 16 18.2589 16H15.0049H13.8921L14.0365 16.9262L14.3327 18.8264C14.5931 20.4962 13.2963 22 11.611 22C10.9568 22 10.3546 21.6349 10.0541 21.0514L6.42149 14ZM6 4.5V12.5H3.75C3.61192 12.5 3.5 12.3881 3.5 12.25V4.75C3.5 4.61192 3.61192 4.5 3.75 4.5H6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ThumbDownFilled24;
