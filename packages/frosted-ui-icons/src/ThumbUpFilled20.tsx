import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.27498 8.20829H3.12496C2.25052 8.20829 1.54163 8.91715 1.54163 9.79163V16.0416C1.54163 16.9161 2.25052 17.625 3.12496 17.625H14.5183C16.1244 17.625 17.4897 16.4517 17.7313 14.8639L18.4288 10.2805C18.7281 8.31351 17.2055 6.54163 15.2157 6.54163H11.7227L12.0674 4.33059C12.2963 2.86282 11.1565 1.54163 9.67579 1.54163C9.08402 1.54163 8.53919 1.87181 8.26723 2.39986L5.27498 8.20829ZM4.87496 16.125V9.70829H3.12496C3.07893 9.70829 3.04163 9.7456 3.04163 9.79163V16.0416C3.04163 16.0877 3.07893 16.125 3.12496 16.125H4.87496Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ThumbUpFilled20;
