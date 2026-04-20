import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.3662 3.86646C17.8544 3.37848 18.6457 3.37836 19.1338 3.86646C19.6217 4.35457 19.6217 5.14592 19.1338 5.63403L7.88379 16.884C7.39568 17.3721 6.60435 17.372 6.11621 16.884L0.866211 11.634C0.378081 11.1459 0.378133 10.3546 0.866211 9.86646C1.35437 9.3783 2.14563 9.3783 2.63379 9.86646L7 14.2327L17.3662 3.86646Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkFilled20.category = 'Checkmarks';

export default CheckmarkFilled20;
