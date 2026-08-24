import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinbaseBoldFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm.063 3.25C5.699 3.75 3.75 5.635 3.75 8s1.949 4.25 4.313 4.25c1.759 0 3.281-1.04 3.95-2.543.225-.504-.002-1.096-.506-1.32-.505-.225-1.096.002-1.32.507-.353.792-1.167 1.356-2.124 1.356C6.766 10.25 5.75 9.225 5.75 8s1.017-2.25 2.313-2.25c.957 0 1.77.564 2.123 1.356.225.505.816.732 1.32.507.505-.224.732-.816.508-1.32-.67-1.503-2.192-2.543-3.951-2.543z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseBoldFilled16.category = 'Interface General';

export default CoinbaseBoldFilled16;
