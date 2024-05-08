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
          d="M5.62499 11.0417H3.12499C2.66476 11.0417 2.29166 10.6686 2.29166 10.2084V3.95837C2.29166 3.49812 2.66476 3.12504 3.12499 3.12504H5.62499M5.62499 3.12504V10.8334L8.93399 17.2567C9.07682 17.5341 9.36374 17.7084 9.67582 17.7084C10.6987 17.7084 11.484 16.7956 11.3264 15.785L10.8467 12.7084H15.2157C16.7463 12.7084 17.9176 11.3454 17.6873 9.83229L16.9898 5.24896C16.804 4.02754 15.7538 3.12504 14.5183 3.12504H5.62499Z"
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
