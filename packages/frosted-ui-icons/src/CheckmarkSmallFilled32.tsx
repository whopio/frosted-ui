import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.3662 9.11646C24.8544 8.62833 25.6456 8.62831 26.1338 9.11646C26.6218 9.60461 26.6219 10.3959 26.1338 10.884L12.6338 24.384C12.1457 24.8721 11.3544 24.8721 10.8662 24.384L4.86621 18.384C4.37806 17.8959 4.37808 17.1046 4.86621 16.6165C5.35437 16.1283 6.14563 16.1283 6.63379 16.6165L11.75 21.7327L24.3662 9.11646Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkSmallFilled32.category = 'Checkmarks';

export default CheckmarkSmallFilled32;
