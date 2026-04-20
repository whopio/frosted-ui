import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23.999 16C23.999 19.3137 21.3127 21.9999 17.999 22H6C2.68637 21.9999 0 19.3137 0 16V8.54883L10.7314 13.1836C11.5409 13.533 12.4591 13.533 13.2686 13.1836L23.999 8.54883V16ZM17.999 2C20.7812 2.00005 23.1198 3.89412 23.7988 6.46289C23.7668 6.47304 23.7347 6.48541 23.7031 6.49902L12.4756 11.3477C12.1722 11.4785 11.8278 11.4785 11.5244 11.3477L0.296875 6.49902C0.264529 6.48506 0.23211 6.47224 0.199219 6.46191C0.878479 3.8935 3.21807 2.00007 6 2H17.999Z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled24.category = 'Communication';

export default MailBoldFilled24;
