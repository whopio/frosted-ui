import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.62499 8.95835H3.12499C2.66476 8.95835 2.29166 9.33144 2.29166 9.79169V16.0417C2.29166 16.5019 2.66476 16.875 3.12499 16.875H5.62499M5.62499 16.875V9.16669L8.93399 2.74339C9.07682 2.466 9.36374 2.29169 9.67582 2.29169C10.6987 2.29169 11.484 3.20448 11.3264 4.2151L10.8467 7.29169H15.2157C16.7463 7.29169 17.9176 8.65469 17.6873 10.1678L16.9898 14.7511C16.804 15.9725 15.7538 16.875 14.5183 16.875H5.62499Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbUp20;
