import * as React from 'react';
import { IconProps } from './types';

export const TelegramFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8 1C11.8669 1 15 4.13306 15 8C15 11.8669 11.8669 15 8 15C4.13306 15 1 11.8669 1 8C1 4.13306 4.13306 1 8 1ZM11.4153 5.79839C11.5282 5.34677 11.246 5.14919 10.9355 5.2621L4.18952 7.85887C3.7379 8.02823 3.7379 8.31048 4.10484 8.42339L5.82661 8.95968L9.83468 6.41935C10.0323 6.30645 10.2016 6.39113 10.0605 6.50403L6.81452 9.43952L6.70161 11.2177C6.87097 11.2177 6.95565 11.1331 7.04032 11.0484L7.8871 10.2298L9.6371 11.5282C9.97581 11.6976 10.2016 11.6129 10.2863 11.2177L11.4153 5.79839Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TelegramFilled16;
