import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.86378 2.43046V5.78C8.86378 5.89104 8.95425 5.98076 9.06529 5.98055C13.2442 5.9725 17.4036 6.69757 18.6935 9.963C20.0041 13.2809 16.7276 17.2624 16.0722 17.926C15.4169 18.5896 16.0722 14.6081 14.7616 13.2809C13.4846 11.9878 11.5854 11.9546 9.06406 11.9538C8.95361 11.9537 8.86378 12.0433 8.86378 12.1537V14.8412C8.86378 15.0113 8.66483 15.1038 8.5348 14.994L1.18114 8.78868C1.08645 8.70878 1.08645 8.56288 1.18114 8.48298L8.5348 2.27761C8.66483 2.16788 8.86378 2.26032 8.86378 2.43046Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled20;