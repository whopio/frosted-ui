import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled16 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <g
        clipPath="url(#clip0_16_142)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="7.25" fill={color} stroke={color} />
        <path d="M4.75 7.75L7 10.25L11.25 5.75" stroke={color} />
      </g>
      <defs>
        <clipPath id="clip0_16_142">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default CheckmarkCircleFilled16;
