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
      data-fui-icon="WalletBoldFilled24"
      {...props}
    >
      <path
        d="M14 2.5c2.485 0 4.5 2.015 4.5 4.5 2.485 0 4.5 2.015 4.5 4.5V17c0 2.485-2.015 4.5-4.5 4.5h-13C3.015 21.5 1 19.485 1 17V5.5c0-.108.016-.211.048-.309C1.313 3.663 2.646 2.5 4.25 2.5H14zm3.25 10c-.966 0-1.75.784-1.75 1.75S16.284 16 17.25 16 19 15.216 19 14.25s-.784-1.75-1.75-1.75zm-13-8C3.56 4.5 3 5.06 3 5.75S3.56 7 4.25 7H16.5c0-1.38-1.12-2.5-2.5-2.5H4.25z"
        fill={color}
      />
    </svg>
  );
};

WalletBoldFilled24.category = 'Money & Shopping';

export default WalletBoldFilled24;
