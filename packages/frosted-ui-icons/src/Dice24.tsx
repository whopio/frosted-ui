import * as React from 'react';
import { IconProps } from './types';

export const Dice24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.04504 4.04505C3.4791 4.61099 3.16116 5.37857 3.16116 6.17893V17.8211C3.16116 18.6214 3.4791 19.389 4.04504 19.955V19.955C4.61098 20.5209 5.37856 20.8388 6.17892 20.8388L17.8211 20.8388C18.6214 20.8388 19.389 20.5209 19.9549 19.955V19.955C20.5209 19.389 20.8388 18.6214 20.8388 17.8211V6.17893C20.8388 5.37857 20.5209 4.61099 19.9549 4.04505V4.04505C19.389 3.47911 18.6214 3.16117 17.8211 3.16117L6.17892 3.16117C5.37856 3.16117 4.61098 3.47911 4.04504 4.04505V4.04505Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8839 11.1161C13.372 11.6043 13.372 12.3957 12.8839 12.8839 12.3957 13.372 11.6043 13.372 11.1161 12.8839 10.628 12.3957 10.628 11.6043 11.1161 11.1161 11.6043 10.628 12.3957 10.628 12.8839 11.1161zM8.64124 6.87348C9.1294 7.36163 9.1294 8.15309 8.64124 8.64124 8.15309 9.1294 7.36163 9.1294 6.87348 8.64124 6.38532 8.15309 6.38532 7.36163 6.87348 6.87348 7.36163 6.38532 8.15309 6.38532 8.64124 6.87348zM6.87347 15.3588C7.36163 14.8706 8.15308 14.8706 8.64124 15.3588 9.12939 15.8469 9.12939 16.6384 8.64124 17.1265 8.15308 17.6147 7.36163 17.6147 6.87347 17.1265 6.38532 16.6384 6.38532 15.8469 6.87347 15.3588zM17.1265 15.3588C17.6147 15.8469 17.6147 16.6384 17.1265 17.1265 16.6384 17.6147 15.8469 17.6147 15.3588 17.1265 14.8706 16.6384 14.8706 15.8469 15.3588 15.3588 15.8469 14.8706 16.6384 14.8706 17.1265 15.3588zM15.3588 6.87348C15.8469 6.38532 16.6384 6.38532 17.1265 6.87348 17.6147 7.36163 17.6147 8.15309 17.1265 8.64124 16.6384 9.1294 15.8469 9.1294 15.3588 8.64124 14.8706 8.15309 14.8706 7.36163 15.3588 6.87348z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Dice24;
