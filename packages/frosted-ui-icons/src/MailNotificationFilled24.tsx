import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationFilled24"
      {...props}
    >
      <path
        d="M22.999 16.25c0 3.176-2.574 5.75-5.75 5.75H6.75C3.575 22 1 19.425 1 16.25V9.055l9.906 3.958c.703.28 1.486.28 2.189 0l9.904-3.958v7.195zM16.167 2c-.108.398-.167.817-.167 1.25C16 5.873 18.127 8 20.75 8c.453 0 .89-.065 1.306-.184l-9.518 3.803c-.345.138-.73.138-1.075 0L1.008 7.442C1.168 4.41 3.678 2 6.75 2h9.417zm6.823 5.443l-.04.016.04-.02v.004zM20.75 0C22.545 0 24 1.455 24 3.25S22.545 6.5 20.75 6.5 17.5 5.045 17.5 3.25 18.955 0 20.75 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationFilled24.category = 'Communication';

export default MailNotificationFilled24;
