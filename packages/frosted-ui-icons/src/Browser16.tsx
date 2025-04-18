import * as React from 'react';
import { IconProps } from './types';

export const Browser16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g fill={color} clipPath="url(#clip0_1679_659)">
        <path d="M4 5C4.55228 5 5 4.55228 5 4 5 3.44772 4.55228 3 4 3 3.44772 3 3 3.44772 3 4 3 4.55228 3.44772 5 4 5zM7 5C7.55228 5 8 4.55228 8 4 8 3.44772 7.55228 3 7 3 6.44772 3 6 3.44772 6 4 6 4.55228 6.44772 5 7 5z" />
        <path
          d="M0.300049 3C0.300049 1.61929 1.41934 0.5 2.80005 0.5H13.2001C14.5808 0.5 15.7001 1.61929 15.7001 3V13C15.7001 14.3807 14.5808 15.5 13.2001 15.5H2.80005C1.41934 15.5 0.300049 14.3807 0.300049 13V3ZM2.80005 2C2.24776 2 1.80005 2.44772 1.80005 3V6H14.2001V3C14.2001 2.44772 13.7524 2 13.2001 2H2.80005ZM13.2001 14C13.7524 14 14.2001 13.5523 14.2001 13V7.5H1.80005V13C1.80005 13.5523 2.24776 14 2.80005 14H13.2001Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_1679_659">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Browser16;
