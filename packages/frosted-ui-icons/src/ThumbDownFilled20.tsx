import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.27498 11.7917H3.12496C2.25052 11.7917 1.54163 11.0828 1.54163 10.2084V3.95837C1.54163 3.0839 2.25052 2.37504 3.12496 2.37504H14.5183C16.1244 2.37504 17.4897 3.54829 17.7313 5.13612L18.4288 9.71945C18.7281 11.6865 17.2055 13.4584 15.2157 13.4584H11.7227L12.0674 15.6694C12.2963 17.1372 11.1565 18.4584 9.67579 18.4584C9.08402 18.4584 8.53919 18.1282 8.26723 17.6001L5.27498 11.7917ZM4.87496 3.87504V10.2917H3.12496C3.07893 10.2917 3.04163 10.2544 3.04163 10.2084V3.95837C3.04163 3.91235 3.07893 3.87504 3.12496 3.87504H4.87496Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ThumbDownFilled20;
