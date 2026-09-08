import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationFilled12"
      {...props}
    >
      <path
        d="M12 8c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V4.537l5.217 2.288c.499.219 1.067.219 1.566 0L12 4.537V8zM7.348 1c-.062.24-.098.49-.098.75 0 1.102.596 2.061 1.48 2.583l-2.55 1.12c-.114.05-.246.05-.36 0L.18 2.978C.599 1.825 1.703 1 3 1h4.348zm2.902-1C11.216 0 12 .784 12 1.75s-.784 1.75-1.75 1.75S8.5 2.716 8.5 1.75 9.284 0 10.25 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationFilled12.category = 'Communication';

export default MailNotificationFilled12;
