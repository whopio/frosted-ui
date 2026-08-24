import * as React from 'react';
import { IconProps } from './types';

export const MailBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBold20"
      {...props}
    >
      <path
        d="M14.998 2c2.761 0 5 2.239 5 5v6c0 2.761-2.239 5-5 5H5c-2.761 0-5-2.239-5-5V7c0-2.761 2.239-5 5-5h9.998zM2 13c0 1.657 1.343 3 3 3h9.998c1.657 0 3-1.343 3-3V8.267l-6.919 2.891c-.69.289-1.468.289-2.158 0L2 8.266V13zm3-9c-1.361 0-2.51.907-2.877 2.15l7.568 3.162c.198.083.42.083.618 0l7.565-3.162C17.507 4.908 16.36 4 14.998 4H5z"
        fill={color}
      />
    </svg>
  );
};

MailBold20.category = 'Communication';

export default MailBold20;
