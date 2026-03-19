import * as React from 'react';
import { IconProps } from './types';

export const MailBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.75 1C10.5448 1.00013 12 2.45515 12 4.25V7.75C12 9.54485 10.5448 10.9999 8.75 11H3.25C1.45507 11 0 9.54493 0 7.75V4.25C0 2.45507 1.45507 1 3.25 1H8.75ZM6.93555 7.01562C6.34304 7.29401 5.65699 7.29391 5.06445 7.01562L2 5.5752V7.75C2 8.44036 2.55964 9 3.25 9H8.75C9.44025 8.99988 10 8.44028 10 7.75V5.5752L6.93555 7.01562ZM3.25 3C2.84687 3 2.48834 3.19104 2.25977 3.4873L5.91504 5.20508C5.96885 5.23025 6.03118 5.23035 6.08496 5.20508L9.73828 3.4873C9.50972 3.19151 9.15271 3.00007 8.75 3H3.25Z"
        fill={color}
      />
    </svg>
  );
};

MailBold12.category = 'Communication';

export default MailBold12;
