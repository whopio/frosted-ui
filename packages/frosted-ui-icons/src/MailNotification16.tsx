import * as React from 'react';
import { IconProps } from './types';

export const MailNotification16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotification16"
      {...props}
    >
      <path
        d="M10.25 2.25c0 .44.082.862.23 1.25H4.5c-1.105 0-2 .895-2 2v.028l5.268 1.993c.147.055.312.055.46 0l4.852-1.836c.217.042.44.065.67.065.44 0 .862-.083 1.25-.231V10.5c0 1.933-1.567 3.5-3.5 3.5h-7C2.567 14 1 12.433 1 10.5v-5C1 3.567 2.567 2 4.5 2h5.76c-.005.083-.01.166-.01.25zM8.758 8.923c-.49.185-1.03.185-1.52 0L2.5 7.132V10.5c0 1.105.895 2 2 2h7c1.104 0 2-.896 2-2V7.13L8.758 8.923zM13.75 0C14.993 0 16 1.007 16 2.25S14.993 4.5 13.75 4.5 11.5 3.493 11.5 2.25 12.507 0 13.75 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotification16.category = 'Communication';

export default MailNotification16;
