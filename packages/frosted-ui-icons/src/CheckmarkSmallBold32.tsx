import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.5429 9.293C24.9334 8.90251 25.5664 8.90249 25.9569 9.293C26.3474 9.68352 26.3474 10.3166 25.9569 10.7071L12.4569 24.2071C12.0665 24.5975 11.4334 24.5975 11.0429 24.2071L5.04288 18.2071C4.65236 17.8165 4.65238 17.1835 5.04288 16.793C5.4334 16.4025 6.06642 16.4025 6.45694 16.793L11.7499 22.086L24.5429 9.293Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBold32.category = 'Checkmarks';

export default CheckmarkSmallBold32;
