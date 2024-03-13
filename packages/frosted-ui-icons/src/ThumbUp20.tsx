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
          d="M5.62496 8.95835H3.12496C2.66473 8.95835 2.29163 9.33144 2.29163 9.79169V16.0417C2.29163 16.5019 2.66473 16.875 3.12496 16.875H5.62496M5.62496 16.875V9.16669L8.93396 2.74339C9.07679 2.466 9.36371 2.29169 9.67579 2.29169C10.6986 2.29169 11.484 3.20448 11.3264 4.2151L10.8467 7.29169H15.2157C16.7463 7.29169 17.9175 8.65469 17.6873 10.1678L16.9898 14.7511C16.804 15.9725 15.7538 16.875 14.5183 16.875H5.62496Z"
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
