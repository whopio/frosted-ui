import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationBold24"
      {...props}
    >
      <path
        d="M16.134 2.32c-.1.413-.155.844-.155 1.288 0 .263.02.52.057.773H7.217c-2.177 0-3.96 1.689-4.112 3.828l8.78 3.752c.311.133.663.133.973 0l7.243-3.096c.414.1.846.156 1.29.156.83 0 1.616-.188 2.32-.522v8.254c0 3.416-2.77 6.185-6.185 6.185H7.218c-3.417 0-6.186-2.77-6.186-6.185V8.505c0-3.416 2.77-6.185 6.186-6.185h8.916zM3.094 16.753c0 2.277 1.846 4.123 4.123 4.123h10.309c2.277 0 4.123-1.846 4.123-4.123v-6.306l-7.981 3.41c-.828.354-1.765.354-2.593 0l-7.981-3.41v6.306zM21.392 0C23.384 0 25 1.615 25 3.608s-1.616 3.608-3.608 3.608c-1.993 0-3.608-1.615-3.608-3.608S19.398 0 21.392 0zm0 2.062c-.854 0-1.547.692-1.547 1.546 0 .854.693 1.547 1.547 1.547s1.546-.693 1.546-1.547-.692-1.546-1.546-1.546z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationBold24.category = 'Communication';

export default MailNotificationBold24;
