import * as React from 'react';
import { IconProps } from './types';

export const Sun32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.9976 4.38777V2.35677M7.78649 24.2115L6.35036 25.6476M15.9976 29.6436V27.6125M25.6446 6.35291L24.2083 7.78905M27.6094 16.0001H29.6404M24.2083 24.2115L25.6446 25.6476M2.35419 16.0001H4.3852M6.35025 6.35283L7.78639 7.78897M20.9472 11.0504C23.6808 13.7841 23.6808 18.2163 20.9472 20.9499C18.2135 23.6836 13.7814 23.6836 11.0477 20.9499C8.314 18.2163 8.314 13.7841 11.0477 11.0504C13.7814 8.31675 18.2135 8.31675 20.9472 11.0504Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sun32;
