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
            d="M0 8.06564C0 3.64737 3.58172 0.0656433 8 0.0656433C12.4183 0.0656433 16 3.64737 16 8.06564C16 12.4839 12.4183 16.0656 8 16.0656C3.58172 16.0656 0 12.4839 0 8.06564ZM5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L6.93934 8L5.21967 9.71967C4.92678 10.0126 4.92678 10.4874 5.21967 10.7803C5.51256 11.0732 5.98744 11.0732 6.28033 10.7803L8 9.06066L9.71967 10.7803C10.0126 11.0732 10.4874 11.0732 10.7803 10.7803C11.0732 10.4874 11.0732 10.0126 10.7803 9.71967L9.06066 8L10.7803 6.28033C11.0732 5.98744 11.0732 5.51256 10.7803 5.21967C10.4874 4.92678 10.0126 4.92678 9.71967 5.21967L8 6.93934L6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967Z"
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
