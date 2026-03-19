import * as React from 'react';
import { IconProps } from './types';

export const MailBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.25 2C13.3211 2 15 3.67893 15 5.75V10.25C15 12.3211 13.3211 14 11.25 14H4.75C2.67893 14 1 12.3211 1 10.25V5.75C1 3.67893 2.67893 2 4.75 2H11.25ZM9.02148 9.03418C8.37503 9.33801 7.62601 9.33784 6.97949 9.03418L3 7.16309V10.25C3 11.2165 3.7835 12 4.75 12H11.25C12.2165 12 13 11.2165 13 10.25V7.16309L9.02148 9.03418ZM4.75 4C4.04173 4 3.43262 4.42117 3.15723 5.02637L7.83008 7.22363C7.93776 7.2741 8.06325 7.27423 8.1709 7.22363L12.8418 5.02734C12.5665 4.42191 11.9584 4 11.25 4H4.75Z"
        fill={color}
      />
    </svg>
  );
};

MailBold16.category = 'Communication';

export default MailBold16;
