import * as React from 'react';
import { IconProps } from './types';

export const WalletBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14 2.5C16.4853 2.5 18.5 4.51472 18.5 7C20.9853 7 23 9.01472 23 11.5V17C23 19.4853 20.9853 21.5 18.5 21.5H5.5C3.01472 21.5 1 19.4853 1 17V5.5C1 5.39238 1.01639 5.28854 1.04785 5.19141C1.31267 3.66265 2.64555 2.5 4.25 2.5H14ZM17.25 12.5C16.2835 12.5 15.5 13.2835 15.5 14.25C15.5 15.2165 16.2835 16 17.25 16C18.2165 16 19 15.2165 19 14.25C19 13.2835 18.2165 12.5 17.25 12.5ZM4.25 4.5C3.55964 4.5 3 5.05964 3 5.75C3 6.44036 3.55964 7 4.25 7H16.5C16.5 5.61929 15.3807 4.5 14 4.5H4.25Z"
        fill={color}
      />
    </svg>
  );
};

WalletBoldFilled24.category = 'Money & Shopping';

export default WalletBoldFilled24;
