import * as React from 'react';
import { IconProps } from './types';

export const MailFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailFilled20"
      {...props}
    >
      <path
        d="M19.999 13.25c0 2.623-2.127 4.75-4.75 4.75H4.75C2.127 18 0 15.873 0 13.25V7.419l9.07 3.548c.596.233 1.26.233 1.858 0l9.071-3.548v5.831zM15.249 2c2.313 0 4.239 1.654 4.662 3.843l-9.53 3.727c-.246.096-.52.096-.765 0L.086 5.844C.51 3.654 2.437 2 4.75 2h10.499z"
        fill={color}
      />
    </svg>
  );
};

MailFilled20.category = 'Communication';

export default MailFilled20;
