import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.62499 11.0416H3.12499C2.66476 11.0416 2.29166 10.6686 2.29166 10.2083V3.95831C2.29166 3.49806 2.66476 3.12498 3.12499 3.12498H5.62499M5.62499 3.12498V10.8333L8.93399 17.2566C9.07682 17.534 9.36374 17.7083 9.67582 17.7083C10.6987 17.7083 11.484 16.7955 11.3264 15.7849L10.8467 12.7083H15.2157C16.7463 12.7083 17.9176 11.3453 17.6873 9.83223L16.9898 5.2489C16.804 4.02748 15.7538 3.12498 14.5183 3.12498H5.62499Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbDown20;
