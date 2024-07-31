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
          d="M5.62496 11.0417H3.12496C2.66473 11.0417 2.29163 10.6686 2.29163 10.2084V3.95837C2.29163 3.49812 2.66473 3.12504 3.12496 3.12504H5.62496M5.62496 3.12504V10.8334L8.93396 17.2567C9.07679 17.5341 9.36371 17.7084 9.67579 17.7084C10.6986 17.7084 11.484 16.7956 11.3264 15.785L10.8467 12.7084H15.2157C16.7463 12.7084 17.9175 11.3454 17.6873 9.83229L16.9898 5.24896C16.804 4.02754 15.7538 3.12504 14.5183 3.12504H5.62496Z"
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
