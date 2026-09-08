import * as React from 'react';
import { IconProps } from './types';

export const MailBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBold32"
      {...props}
    >
      <path
        d="M23.499 3c4.142 0 7.5 3.358 7.5 7.5v11c0 4.142-3.358 7.5-7.5 7.5H8.5C4.358 29 1 25.642 1 21.5v-11C1 6.358 4.358 3 8.5 3h14.999zm-5.887 14.257c-1.027.453-2.199.453-3.226 0L3 12.238V21.5C3 24.538 5.463 27 8.5 27h14.999c3.038 0 5.5-2.462 5.5-5.5v-9.263l-11.387 5.02zM8.5 5c-2.89 0-5.258 2.229-5.481 5.06l12.173 5.367c.514.226 1.1.226 1.614 0L28.98 10.06C28.756 7.23 26.389 5 23.498 5H8.5z"
        fill={color}
      />
    </svg>
  );
};

MailBold32.category = 'Communication';

export default MailBold32;
