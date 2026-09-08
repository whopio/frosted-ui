import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationBold20"
      {...props}
    >
      <path
        d="M13.025 2.333c-.04.254-.062.513-.062.778 0 .449.06.883.173 1.296H6.222c-1.553 0-2.84 1.138-3.073 2.625l6.9 2.885c.205.085.436.085.64 0l5.354-2.24c.57.231 1.193.36 1.846.36.64 0 1.251-.124 1.813-.346v6.05c0 2.863-2.322 5.185-5.186 5.185H6.223c-2.863 0-5.185-2.322-5.185-5.185V7.519c0-2.864 2.322-5.186 5.185-5.186h6.803zm-1.537 9.497c-.716.299-1.522.299-2.238 0L3.111 9.264v4.477c0 1.718 1.393 3.11 3.111 3.11h8.294c1.719 0 3.112-1.392 3.112-3.11V9.264l-6.14 2.566zM17.888 0C19.609 0 21 1.393 21 3.111c0 1.718-1.393 3.111-3.111 3.111-1.718 0-3.111-1.393-3.111-3.11 0-1.72 1.393-3.112 3.11-3.112zm0 2.074c-.572 0-1.036.464-1.036 1.037s.464 1.037 1.037 1.037 1.037-.464 1.037-1.037-.464-1.037-1.037-1.037z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationBold20.category = 'Communication';

export default MailNotificationBold20;
