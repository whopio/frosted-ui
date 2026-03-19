import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.05261 0.576401C5.55132 -0.00281912 6.44847 -0.00263813 6.94714 0.576401L10.0878 4.22289C10.6454 4.87101 10.1852 5.87505 9.32996 5.87523H8.37488V10.1252C8.37463 10.8153 7.81502 11.3752 7.12488 11.3752H4.87488C4.18478 11.3751 3.62513 10.8153 3.62488 10.1252V5.87523H2.6698C1.81475 5.87485 1.35517 4.87097 1.91296 4.22289L5.05261 0.576401ZM3.76062 4.37523H4.37488C4.78891 4.3753 5.12469 4.71122 5.12488 5.12523V9.87523H6.87488V5.12523C6.87506 4.71124 7.21087 4.37533 7.62488 4.37523H8.23914L5.99988 1.77464L3.76062 4.37523Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUp12.category = 'Arrows';

export default ArrowFatUp12;
