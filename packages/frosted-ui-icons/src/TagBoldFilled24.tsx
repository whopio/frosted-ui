import * as React from 'react';
import { IconProps } from './types';

export const TagBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagBoldFilled24"
      {...props}
    >
      <path
        d="M18.75 1C21.0971 1 22.9999 2.90289 23 5.25V10.6611C23 12.2523 22.3682 13.7782 21.2432 14.9033L14.6074 21.54C12.6549 23.4926 9.48877 23.4924 7.53613 21.54L2.46094 16.4648C0.508572 14.5122 0.508459 11.3461 2.46094 9.39355L9.09766 2.75781C10.2228 1.63269 11.7487 1.00005 13.3398 1H18.75ZM16 4.75C14.2051 4.75 12.75 6.20507 12.75 8C12.75 9.79493 14.2051 11.25 16 11.25C17.7949 11.25 19.25 9.79492 19.25 8C19.25 6.20508 17.7949 4.75 16 4.75Z"
        fill={color}
      />
    </svg>
  );
};

TagBoldFilled24.category = 'Interface General';

export default TagBoldFilled24;
