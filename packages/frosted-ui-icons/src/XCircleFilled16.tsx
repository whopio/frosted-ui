import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1122_35)">
          <path
            d="M0 8.06567C0 3.6474 3.58172 0.0656738 8 0.0656738C12.4183 0.0656738 16 3.6474 16 8.06567C16 12.484 12.4183 16.0657 8 16.0657C3.58172 16.0657 0 12.484 0 8.06567ZM5.21967 5.2197C4.92678 5.51259 4.92678 5.98747 5.21967 6.28036L6.93934 8.00003L5.21967 9.7197C4.92678 10.0126 4.92678 10.4875 5.21967 10.7804C5.51256 11.0733 5.98744 11.0733 6.28033 10.7804L8 9.06069L9.71967 10.7804C10.0126 11.0733 10.4874 11.0733 10.7803 10.7804C11.0732 10.4875 11.0732 10.0126 10.7803 9.7197L9.06066 8.00003L10.7803 6.28036C11.0732 5.98747 11.0732 5.51259 10.7803 5.2197C10.4874 4.92681 10.0126 4.92681 9.71967 5.2197L8 6.93937L6.28033 5.2197C5.98744 4.92681 5.51256 4.92681 5.21967 5.2197Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_1122_35">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default XCircleFilled16;
