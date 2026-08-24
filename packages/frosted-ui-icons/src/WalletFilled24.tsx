import * as React from 'react';
import { IconProps } from './types';

export const WalletFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WalletFilled24"
      {...props}
    >
      <path
        d="M13.75 2.5C16.097 2.5 18 4.403 18 6.75V7h.75C21.097 7 23 8.903 23 11.25v6c0 2.347-1.903 4.25-4.25 4.25H5.25C2.903 21.5 1 19.597 1 17.25V5.5c0-1.657 1.343-3 3-3h9.75zm3.75 10.25c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM4 4c-.828 0-1.5.672-1.5 1.5S3.172 7 4 7h12.5v-.25C16.5 5.231 15.269 4 13.75 4H4z"
        fill={color}
      />
    </svg>
  );
};

WalletFilled24.category = 'Money & Shopping';

export default WalletFilled24;
