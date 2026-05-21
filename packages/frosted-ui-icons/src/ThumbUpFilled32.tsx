import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.71474 13.5832H5.00033C3.84975 13.5832 2.91699 14.5159 2.91699 15.6665V25.6665C2.91699 26.8171 3.84975 27.7498 5.00033 27.7498H23.2297C25.5771 27.7498 27.5724 26.0351 27.9255 23.7144L29.0415 16.3811C29.479 13.5062 27.2536 10.9165 24.3455 10.9165H18.2311L18.8636 6.85952C19.187 4.78537 17.5761 2.9165 15.4817 2.9165C14.7026 2.9165 13.9857 3.35128 13.628 4.04575L8.71474 13.5832ZM8.25033 26.2498V15.0832H5.00033C4.67816 15.0832 4.41699 15.3443 4.41699 15.6665V25.6665C4.41699 25.9887 4.67816 26.2498 5.00033 26.2498H8.25033Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbUpFilled32.category = 'Interface General';

export default ThumbUpFilled32;
