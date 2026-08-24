import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBoldFilled20"
      {...props}
    >
      <path
        d="M8.911 11.15c.696.294 1.482.294 2.178 0l8.909-3.762V13c0 2.761-2.239 5-5 5H5c-2.761 0-5-2.239-5-5V7.387l8.911 3.763zM14.998 2c2.178 0 4.03 1.393 4.715 3.337l-9.402 3.97c-.198.085-.424.085-.623 0L.284 5.338C.97 3.393 2.822 2 5 2h9.998z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled20.category = 'Communication';

export default MailBoldFilled20;
