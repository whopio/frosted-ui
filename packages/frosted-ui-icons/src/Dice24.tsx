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
        <g clipPath="url(#clip0_457_20)">
          <path
            d="M6.85714 5.14286C7.76786 5.14286 8.57143 5.94643 8.57143 6.85714C8.57143 7.82143 7.76786 8.57143 6.85714 8.57143C5.89286 8.57143 5.14286 7.82143 5.14286 6.85714C5.14286 5.94643 5.89286 5.14286 6.85714 5.14286ZM6.85714 15.4286C7.76786 15.4286 8.57143 16.2321 8.57143 17.1429C8.57143 18.1071 7.76786 18.8571 6.85714 18.8571C5.89286 18.8571 5.14286 18.1071 5.14286 17.1429C5.14286 16.2321 5.89286 15.4286 6.85714 15.4286ZM17.1429 15.4286C18.0536 15.4286 18.8571 16.2321 18.8571 17.1429C18.8571 18.1071 18.0536 18.8571 17.1429 18.8571C16.1786 18.8571 15.4286 18.1071 15.4286 17.1429C15.4286 16.2321 16.1786 15.4286 17.1429 15.4286ZM17.1429 5.14286C18.0536 5.14286 18.8571 5.94643 18.8571 6.85714C18.8571 7.82143 18.0536 8.57143 17.1429 8.57143C16.1786 8.57143 15.4286 7.82143 15.4286 6.85714C15.4286 5.94643 16.1786 5.14286 17.1429 5.14286ZM20.5714 0C22.4464 0 24 1.55357 24 3.42857V20.5714C24 22.5 22.4464 24 20.5714 24H3.42857C1.5 24 0 22.5 0 20.5714V3.42857C0 1.55357 1.5 0 3.42857 0H20.5714ZM21.4286 20.5714V3.42857C21.4286 3 21 2.57143 20.5714 2.57143H3.42857C2.94643 2.57143 2.57143 3 2.57143 3.42857V20.5714C2.57143 21.0536 2.94643 21.4286 3.42857 21.4286H20.5714C21 21.4286 21.4286 21.0536 21.4286 20.5714ZM12 10.2857C12.9107 10.2857 13.7143 11.0893 13.7143 12C13.7143 12.9643 12.9107 13.7143 12 13.7143C11.0357 13.7143 10.2857 12.9643 10.2857 12C10.2857 11.0893 11.0357 10.2857 12 10.2857Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_457_20">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Dice24;