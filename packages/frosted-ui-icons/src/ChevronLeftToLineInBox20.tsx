import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBox20 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <g clipPath="url(#clip0_320_93)">
        <g
          stroke={color}
          clipPath="url(#clip1_320_93)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M18.75 7.25V12.75C18.75 16.0637 16.0637 18.75 12.75 18.75H7.25C3.93629 18.75 1.25 16.0637 1.25 12.75V7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H12.75C16.0637 1.25 18.75 3.93629 18.75 7.25Z" />
          <path d="M13.25 6.75L10 10L13.25 13.25" strokeLinejoin="round" />
          <path d="M6.75 6.75V13.25" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_320_93">
          <path fill={color} d="M0 0H20V20H0z" />
        </clipPath>
        <clipPath id="clip1_320_93">
          <path
            fill={color}
            transform="matrix(-1 0 0 1 20 0)"
            d="M0 0H20V20H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default ChevronLeftToLineInBox20;
