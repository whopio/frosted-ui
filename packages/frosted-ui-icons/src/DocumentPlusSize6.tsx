import * as React from 'react';
import { IconProps } from './types';

export const DocumentPlusSize6 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_570_1059)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path
            d="M17.3125 11.2448C17.3125 7.48781 17.3125 7.36557 17.3125 5.25171C17.3125 3.87099 16.1932 2.75 14.8125 2.75H9.98437H5.15625C3.77554 2.75 2.65625 3.86929 2.65625 5.25V14.8125C2.65625 16.1932 3.77542 17.3125 5.15613 17.3125C7.18514 17.3125 9.2962 17.3125 11.2057 17.3125"
            strokeLinejoin="round"
          />
          <path d="M5.83334 6.66675H14.1667M5.83334 13.3334H10M5.83334 10H14.1667M15.8333 18.3334V15.8334M15.8333 13.3334V15.8334M15.8333 15.8334H13.3333M15.8333 15.8334H18.3333" />
        </g>
        <defs>
          <clipPath id="clip0_570_1059">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DocumentPlusSize6;
