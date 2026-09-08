import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationBoldFilled32"
      {...props}
    >
      <path
        d="M30.999 21.5c0 4.142-3.358 7.5-7.5 7.5H8.5C4.358 29 1 25.642 1 21.5V11.318l13.379 5.932c1.032.457 2.21.458 3.242 0L31 11.318V21.5zM21.625 3c-.082.404-.125.822-.125 1.25 0 3.452 2.798 6.25 6.25 6.25.057 0 .114-.003.17-.005l-11.11 4.927c-.515.229-1.104.228-1.62 0L1.117 9.182C1.74 5.67 4.807 3 8.5 3h13.125zm6.125-3C30.097 0 32 1.903 32 4.25S30.097 8.5 27.75 8.5 23.5 6.597 23.5 4.25 25.403 0 27.75 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationBoldFilled32.category = 'Communication';

export default MailNotificationBoldFilled32;
