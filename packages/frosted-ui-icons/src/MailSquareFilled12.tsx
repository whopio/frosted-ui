import * as React from 'react';
import { IconProps } from './types';

export const MailSquareFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 8.25C12 10.3211 10.3211 12 8.25 12H3.75C1.67893 12 0 10.3211 0 8.25V4.53711L5.2168 6.8252C5.71589 7.04403 6.28411 7.04403 6.7832 6.8252L12 4.53711V8.25ZM8.25 0C10.0427 0 11.5406 1.25814 11.9111 2.93945L6.18066 5.45215C6.06557 5.50256 5.93443 5.50256 5.81934 5.45215L0.0878906 2.93945C0.458368 1.25804 1.95724 1.11536e-07 3.75 0H8.25Z"
        fill={color}
      />
    </svg>
  );
};

MailSquareFilled12.category = 'Communication';

export default MailSquareFilled12;
