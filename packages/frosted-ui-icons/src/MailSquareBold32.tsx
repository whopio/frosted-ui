import * as React from 'react';
import { IconProps } from './types';

export const MailSquareBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22 1C26.9706 1 31 5.02944 31 10V22C31 26.9706 26.9706 31 22 31H10C5.02944 31 1 26.9706 1 22V10C1 5.02944 5.02944 1 10 1H22ZM17.708 17.1748C16.6267 17.6854 15.3733 17.6854 14.292 17.1748L3 11.8418V22C3 25.866 6.13401 29 10 29H22C25.866 29 29 25.866 29 22V11.8418L17.708 17.1748ZM10 3C6.25683 3 3.19925 5.938 3.00879 9.63379L15.1455 15.3662C15.6862 15.6215 16.3138 15.6215 16.8545 15.3662L28.9902 9.63379C28.7997 5.93802 25.7432 3 22 3H10Z"
        fill={color}
      />
    </svg>
  );
};

MailSquareBold32.category = 'Communication';

export default MailSquareBold32;
