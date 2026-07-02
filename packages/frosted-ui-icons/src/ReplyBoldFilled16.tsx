import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.00006 12.8359C9.00006 13.9545 7.68066 14.5514 6.84088 13.8124L1.51568 9.1259C0.837219 8.52864 0.83722 7.47122 1.51568 6.87395L6.84088 2.18743L6.92096 2.122C7.76181 1.48601 9.00006 2.08026 9.00006 3.16399V5.03801C11.3197 5.22172 12.8863 6.06708 13.835 7.48528C14.8495 9.00199 15 10.9695 15.0001 12.7616C15.0001 13.1783 14.7416 13.5516 14.3516 13.6982C13.9617 13.8446 13.5214 13.7333 13.2471 13.4198C12.2674 12.3003 11.4814 11.7258 10.7266 11.4111C10.2079 11.1947 9.65995 11.0837 9.00006 11.0341V12.8359Z"
        fill={color}
      />
    </svg>
  );
};

ReplyBoldFilled16.category = 'Arrows';

export default ReplyBoldFilled16;
