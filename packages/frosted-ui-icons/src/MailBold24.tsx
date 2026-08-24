import * as React from 'react';
import { IconProps } from './types';

export const MailBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBold24"
      {...props}
    >
      <path
        d="M17.999 2c3.314 0 6 2.686 6 6v8c0 3.314-2.686 6-6 6H6c-3.314 0-6-2.686-6-6V8c0-3.314 2.686-6 6-6h11.999zm-4.742 11.191c-.803.343-1.712.343-2.515 0L2 9.456V16c0 2.21 1.79 4 4 4h11.999c2.21 0 4-1.79 4-4V9.456l-8.742 3.735zM6 4C4.015 4 2.367 5.446 2.054 7.343c.086.012.172.034.256.07l9.218 3.94c.301.128.643.128.944 0l9.217-3.94c.084-.036.17-.058.255-.07C21.631 5.446 19.984 4 18 4H6z"
        fill={color}
      />
    </svg>
  );
};

MailBold24.category = 'Communication';

export default MailBold24;
