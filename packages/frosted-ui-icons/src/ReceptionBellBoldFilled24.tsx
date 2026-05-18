import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.5022 1C16.0545 1.00001 16.5022 1.44772 16.5022 2C16.5022 2.55228 16.0545 2.99999 15.5022 3H13.0003V4.0293C17.1642 4.26984 19.7086 6.02644 21.1722 8.52441C22.6869 11.1101 22.9506 14.3431 22.9944 16.9834C23.0131 18.1065 22.101 19 21.0022 19H13.0003V21H21.0022C21.5545 21 22.0022 21.4477 22.0022 22C22.0022 22.5523 21.5545 23 21.0022 23H3.00223C2.44995 23 2.00223 22.5523 2.00223 22C2.00223 21.4477 2.44995 21 3.00223 21H11.0003V19H3.00223C1.90345 19 0.991516 18.1064 1.01004 16.9834C1.05362 14.3434 1.31596 11.1111 2.82938 8.52539C4.29191 6.0268 6.83567 4.26964 11.0003 4.0293V3H8.50223C7.94995 3 7.50223 2.55228 7.50223 2C7.50223 1.44772 7.94995 1 8.50223 1H15.5022Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellBoldFilled24.category = 'Objects';

export default ReceptionBellBoldFilled24;
