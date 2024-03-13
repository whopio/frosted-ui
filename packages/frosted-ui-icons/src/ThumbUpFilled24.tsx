import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.42149 10H3.75C2.78352 10 2 10.7835 2 11.75V19.25C2 20.2165 2.78352 21 3.75 21H17.422C19.2752 21 20.8505 19.6463 21.1293 17.8141L21.9663 12.3141C22.3116 10.0445 20.5548 8 18.2589 8H15.0049H13.8921L14.0365 7.07384L14.3327 5.17365C14.5931 3.50375 13.2963 2 11.611 2C10.9568 2 10.3546 2.36505 10.0541 2.94857L6.42149 10ZM6 19.5V11.5H3.75C3.61192 11.5 3.5 11.6119 3.5 11.75V19.25C3.5 19.3881 3.61192 19.5 3.75 19.5H6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ThumbUpFilled24;
