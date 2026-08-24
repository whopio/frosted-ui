import * as React from 'react';
import { IconProps } from './types';

export const WalletBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WalletBold24"
      {...props}
    >
      <path
        d="M14 2.5c2.485 0 4.5 2.015 4.5 4.5 2.485 0 4.5 2.015 4.5 4.5V17c0 2.485-2.015 4.5-4.5 4.5h-13C3.015 21.5 1 19.485 1 17V5.5c0-.108.016-.211.048-.309C1.313 3.663 2.646 2.5 4.25 2.5H14zM3 17c0 1.38 1.12 2.5 2.5 2.5h13c1.38 0 2.5-1.12 2.5-2.5v-5.5c0-1.38-1.12-2.5-2.5-2.5H4.25c-.443 0-.865-.09-1.25-.251V17zm14.25-4.5c.966 0 1.75.784 1.75 1.75S18.216 16 17.25 16s-1.75-.784-1.75-1.75.784-1.75 1.75-1.75zm-13-8C3.56 4.5 3 5.06 3 5.75S3.56 7 4.25 7H16.5c0-1.38-1.12-2.5-2.5-2.5H4.25z"
        fill={color}
      />
    </svg>
  );
};

WalletBold24.category = 'Money & Shopping';

export default WalletBold24;
