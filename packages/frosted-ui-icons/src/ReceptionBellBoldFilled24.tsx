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
        d="M15.502 1C16.0542 1.00001 16.502 1.44772 16.502 2C16.502 2.55228 16.0542 2.99999 15.502 3H13V4.0293C17.1639 4.26984 19.7084 6.02644 21.1719 8.52441C22.6866 11.1101 22.9503 14.3431 22.9941 16.9834C23.0128 18.1065 22.1007 19 21.002 19H13V21H21.002C21.5542 21 22.002 21.4477 22.002 22C22.002 22.5523 21.5542 23 21.002 23H3.00195C2.44967 23 2.00195 22.5523 2.00195 22C2.00195 21.4477 2.44967 21 3.00195 21H11V19H3.00195C1.90317 19 0.991238 18.1064 1.00977 16.9834C1.05334 14.3434 1.31568 11.1111 2.8291 8.52539C4.29163 6.0268 6.83539 4.26964 11 4.0293V3H8.50195C7.94967 3 7.50195 2.55228 7.50195 2C7.50195 1.44772 7.94967 1 8.50195 1H15.502Z"
        fill={color}
      />
    </svg>
  );
};

ReceptionBellBoldFilled24.category = 'Objects';

export default ReceptionBellBoldFilled24;
