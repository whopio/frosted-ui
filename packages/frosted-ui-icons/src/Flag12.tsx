import * as React from 'react';
import { IconProps } from './types';

export const Flag12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.375 7.54165V2.19956C2.375 2.00931 2.48285 1.83576 2.65944 1.76499C3.03891 1.61293 3.74476 1.375 4.44643 1.375C5.47765 1.375 6.52235 2.40278 7.55355 2.40278C8.02575 2.40278 8.49985 2.29503 8.8751 2.1782C9.229 2.06802 9.625 2.32294 9.625 2.69358V7.231C9.625 7.42125 9.51715 7.5948 9.34055 7.66555C8.9611 7.81765 8.25525 8.05555 7.55355 8.05555C6.52235 8.05555 5.47765 7.0278 4.44643 7.0278C3.41523 7.0278 2.375 7.54165 2.375 7.54165ZM2.375 7.54165V10.625"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Flag12;
