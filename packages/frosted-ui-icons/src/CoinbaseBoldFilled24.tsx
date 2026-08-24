import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinbaseBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm.065 3.75C7.761 4.25 4.25 7.708 4.25 12s3.51 7.75 7.815 7.75c3.328 0 6.175-2.064 7.301-4.979.249-.643-.072-1.367-.716-1.616-.644-.248-1.367.072-1.616.716-.762 1.972-2.696 3.379-4.969 3.379-2.947 0-5.315-2.362-5.315-5.25s2.368-5.25 5.315-5.25c2.273 0 4.207 1.407 4.97 3.379.248.644.971.964 1.615.716.644-.249.965-.973.716-1.616-1.126-2.915-3.973-4.979-7.3-4.979z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseBoldFilled24.category = 'Interface General';

export default CoinbaseBoldFilled24;
