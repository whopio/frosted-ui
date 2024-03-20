import * as React from 'react';
import { IconProps } from './types';

export const Star32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.0489 4.42705C15.3483 3.50574 16.6517 3.50574 16.9511 4.42705L19.3746 11.886C19.5085 12.2981 19.8925 12.577 20.3257 12.577H28.1685C29.1372 12.577 29.54 13.8166 28.7563 14.386L22.4113 18.9959C22.0608 19.2506 21.9142 19.7019 22.048 20.114L24.4716 27.5729C24.771 28.4943 23.7165 29.2604 22.9328 28.691L16.5878 24.0811C16.2373 23.8264 15.7627 23.8264 15.4122 24.0811L9.06724 28.691C8.28352 29.2604 7.22905 28.4943 7.5284 27.5729L9.95196 20.114C10.0858 19.7019 9.93918 19.2506 9.58869 18.9959L3.24371 14.386C2.46 13.8166 2.86277 12.577 3.8315 12.577H11.6743C12.1076 12.577 12.4915 12.2981 12.6254 11.886L15.0489 4.42705Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star32;
