import * as React from 'react';
import { IconProps } from './types';

export const Book32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.75 27.6946V6.8539C.75 6.30244.972122 5.77779 1.40295 5.43356 5.68799 2.00987 12.1987 2.19868 16 6.00001 19.8013 2.19868 26.312 2.00987 30.597 5.43356 31.0279 5.77779 31.25 6.31269 31.25 6.86415V27.6856C31.25 28.562 30.1582 29.0581 29.4075 28.6059 25.1782 26.0583 19.4641 26.4355 16 29.25 12.5359 26.4354 6.82183 26.0583 2.59247 28.6059 1.84176 29.0581.75 28.571.75 27.6946zM16 6L16 27.7501"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Book32;
