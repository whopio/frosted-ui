import * as React from 'react';
import { IconProps } from './types';

export const MailFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 8C12 9.65685 10.6569 11 9 11H3C1.34315 11 0 9.65685 0 8V4.53711L5.2168 6.8252C5.71589 7.04403 6.28411 7.04403 6.7832 6.8252L12 4.53711V8ZM9 1C10.2981 1 11.4005 1.82563 11.8184 2.97949L6.18066 5.45215C6.06557 5.50256 5.93443 5.50256 5.81934 5.45215L0.180664 2.97949C0.598468 1.82546 1.70177 1 3 1H9Z"
        fill={color}
      />
    </svg>
  );
};

MailFilled12.category = 'Communication';

export default MailFilled12;
