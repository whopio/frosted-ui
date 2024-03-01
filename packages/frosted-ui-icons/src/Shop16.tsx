import * as React from 'react';
import { IconProps } from './types';

export const Shop16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g stroke={color} clipPath="url(#clip0_14_1548)" strokeWidth="1.5">
          <path
            d="M1.75 7V12.6757C1.75 14.0974 2.90253 15.25 4.32424 15.25H11.6758C13.0975 15.25 14.25 14.0975 14.25 12.6757V7"
            strokeLinecap="round"
          />
          <path
            d="M5.75001 15.1993L5.75 11.25C5.75 10.9739 5.97386 10.75 6.25 10.75H9.75C10.0261 10.75 10.25 10.9739 10.25 11.25V15.1993"
            strokeLinecap="round"
          />
          <path d="M1.23986 3.36406C1.6462 2.3868 2.60062 1.75 3.659 1.75H6.10425L5.47252 5.28768C5.26975 6.42317 4.2822 7.25 3.12874 7.25H3.00113C1.75735 7.25.748829 6.24217.747972 4.99839.747767 4.70096.806453 4.40644.920644 4.1318L1.23986 3.36406zM14.7577 3.36406C14.3514 2.3868 13.3969 1.75 12.3386 1.75H9.89331L10.525 5.28768C10.7278 6.42317 11.7154 7.25 12.8688 7.25H12.9964C14.2402 7.25 15.2487 6.24217 15.2496 4.99839 15.2498 4.70096 15.1911 4.40644 15.0769 4.1318L14.7577 3.36406zM5.64754 4.44024L6.12794 1.75H9.87206L10.3525 4.44024C10.614 5.90495 9.48788 7.25 8 7.25 6.51212 7.25 5.38598 5.90495 5.64754 4.44024z" />
        </g>
        <defs>
          <clipPath id="clip0_14_1548">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Shop16;
