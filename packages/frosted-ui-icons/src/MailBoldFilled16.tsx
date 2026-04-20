import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.9951 10.25C15.9951 12.3211 14.3162 14 12.2451 14H3.75C1.67905 13.9999 0 12.321 0 10.25V6.22949L7.09277 9.11914C7.6731 9.35546 8.323 9.35548 8.90332 9.11914L15.9951 6.22949V10.25ZM12.2451 2C13.7659 2 15.0737 2.90597 15.6621 4.20703L8.14844 7.2666C8.05178 7.30589 7.94332 7.30596 7.84668 7.2666L0.332031 4.20605C0.920592 2.9053 2.22949 2.0001 3.75 2H12.2451Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MailBoldFilled16.category = 'Communication';

export default MailBoldFilled16;
