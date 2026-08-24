import * as React from 'react';
import { IconProps } from './types';

export const Wallet24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Wallet24"
      {...props}
    >
      <path
        d="M13.75 2.5C16.097 2.5 18 4.403 18 6.75V7h.75C21.097 7 23 8.903 23 11.25v6c0 2.347-1.903 4.25-4.25 4.25H5.25C2.903 21.5 1 19.597 1 17.25V5.5c0-1.657 1.343-3 3-3h9.75zM2.5 17.25C2.5 18.769 3.731 20 5.25 20h13.5c1.519 0 2.75-1.231 2.75-2.75v-6c0-1.519-1.231-2.75-2.75-2.75H4c-.547 0-1.058-.15-1.5-.405v9.155zm15-4.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM4 4c-.828 0-1.5.672-1.5 1.5S3.172 7 4 7h12.5v-.25C16.5 5.231 15.269 4 13.75 4H4z"
        fill={color}
      />
    </svg>
  );
};

Wallet24.category = 'Money & Shopping';

export default Wallet24;
