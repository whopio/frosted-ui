import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationFilled16"
      {...props}
    >
      <path
        d="M15 10.5c0 1.933-1.567 3.5-3.5 3.5h-7C2.567 14 1 12.433 1 10.5V6.532l6.229 2.385c.494.19 1.042.19 1.537 0L15 6.532V10.5zm-4.75-8.25c0 1.689 1.196 3.097 2.787 3.427L8.23 7.517c-.15.057-.315.057-.464 0L1.044 4.943C1.31 3.275 2.756 2 4.5 2h5.76c-.005.083-.01.166-.01.25zM13.75 0C14.993 0 16 1.007 16 2.25S14.993 4.5 13.75 4.5 11.5 3.493 11.5 2.25 12.507 0 13.75 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationFilled16.category = 'Communication';

export default MailNotificationFilled16;
