import * as React from 'react';
import { IconProps } from './types';

export const WalletFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.25 1.5C13.2369 1.50011 14.8625 3.04559 14.9912 5H15.25C17.321 5.00012 19 6.679 19 8.75V13.75C19 15.821 17.321 17.4999 15.25 17.5H4.75C2.67903 17.4999 1 15.821 1 13.75V3.75C1 3.64496 1.02156 3.54486 1.06055 3.4541C1.30964 2.33607 2.30694 1.5001 3.5 1.5H11.25ZM14 10C13.3096 10 12.75 10.5596 12.75 11.25C12.75 11.9404 13.3096 12.5 14 12.5C14.6903 12.4999 15.25 11.9403 15.25 11.25C15.25 10.5597 14.6903 10.0001 14 10ZM3.5 3C2.94781 3.00011 2.5 3.44778 2.5 4C2.5 4.55222 2.94781 4.99989 3.5 5H13.4854C13.3609 3.87514 12.408 3.00011 11.25 3H3.5Z"
        fill={color}
      />
    </svg>
  );
};

WalletFilled20.category = 'Money & Shopping';

export default WalletFilled20;
