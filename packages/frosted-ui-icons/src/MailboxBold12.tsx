import * as React from 'react';
import { IconProps } from './types';

export const MailboxBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailboxBold12"
      {...props}
    >
      <path
        d="M6.782.191c.26-.188.593-.241.898-.142l2 .65c.415.135.695.525.69.962-.005.437-.294.82-.713.946l-1.287.386V3.5h.13C10.433 3.5 12 5.067 12 7v3.25c0 .966-.784 1.75-1.75 1.75h-8.5C.784 12 0 11.216 0 10.25v-3.5C0 4.955 1.455 3.5 3.25 3.5h3.12V1c0-.32.153-.62.412-.809zM3.25 5.5C2.56 5.5 2 6.06 2 6.75V10h2.5V6.75c0-.69-.56-1.25-1.25-1.25zm3 0c.16.385.25.807.25 1.25V10H10V7c0-.828-.672-1.5-1.5-1.5H6.25zM3.5 8c.414 0 .75.336.75.75s-.336.75-.75.75H3c-.414 0-.75-.336-.75-.75S2.586 8 3 8h.5z"
        fill={color}
      />
    </svg>
  );
};

MailboxBold12.category = 'Interface General';

export default MailboxBold12;
