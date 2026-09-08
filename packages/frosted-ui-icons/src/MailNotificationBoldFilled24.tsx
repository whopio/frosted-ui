import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationBoldFilled24"
      {...props}
    >
      <path
        d="M10.731 13.184c.81.349 1.728.349 2.538 0l9.73-4.203V16c0 3.314-2.686 6-6 6H7c-3.314 0-6-2.686-6-6V8.98l9.731 4.204zM15.651 2c-.098.4-.151.82-.151 1.25 0 2.45 1.677 4.507 3.945 5.087l-6.97 3.01c-.303.132-.647.132-.95 0L1.11 6.852C1.648 4.087 4.08 2 7 2h8.65zm5.099-2C22.545 0 24 1.455 24 3.25S22.545 6.5 20.75 6.5 17.5 5.045 17.5 3.25 18.955 0 20.75 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationBoldFilled24.category = 'Communication';

export default MailNotificationBoldFilled24;
