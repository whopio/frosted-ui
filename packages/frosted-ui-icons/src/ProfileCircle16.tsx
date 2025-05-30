import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_882_1417)">
        <path
          d="M8 14.75C11.7279 14.75 14.75 11.7279 14.75 8C14.75 4.27208 11.7279 1.25 8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75ZM8 14.75C9.67766 14.75 11.2124 14.138 12.3931 13.125C11.2124 12.112 9.67775 11.5 8.00011 11.5C6.32245 11.5 4.78774 12.112 3.60709 13.125C4.78774 14.138 6.32236 14.75 8 14.75ZM10.25 7C10.25 8.24264 9.24264 9.25 8 9.25C6.75736 9.25 5.75 8.24264 5.75 7C5.75 5.75736 6.75736 4.75 8 4.75C9.24264 4.75 10.25 5.75736 10.25 7Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_882_1417">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileCircle16;
