import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.3661 6.1162C18.8543 5.6283 19.6466 5.62813 20.1346 6.1162C20.622 6.60427 20.6222 7.3958 20.1346 7.88378L9.63366 18.3838C9.3993 18.6181 9.08128 18.7499 8.74987 18.75C8.41852 18.75 8.10045 18.618 7.86608 18.3838L3.61608 14.1338C3.12795 13.6456 3.12799 12.8544 3.61608 12.3662C4.10424 11.878 4.89551 11.878 5.38366 12.3662L8.74987 15.7324L18.3661 6.1162Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallFilled24.category = 'Checkmarks';

export default CheckmarkSmallFilled24;
