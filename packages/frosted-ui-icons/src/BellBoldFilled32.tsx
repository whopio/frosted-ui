import * as React from 'react';
import { IconProps } from './types';

export const BellBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.693 27.5C20.8692 27.5 20.9896 27.6774 20.9154 27.8371C20.023 29.7565 18.1908 30.9999 16.005 31C13.8207 30.9997 11.9828 29.7574 11.0873 27.8373C11.0128 27.6776 11.1332 27.5 11.3095 27.5H20.693ZM16.005 1C20.4333 1.00009 23.129 3.31544 24.7071 6.03125C26.2538 8.69322 26.7515 11.7606 26.9161 13.4961C26.9906 14.2818 27.2238 15.0033 27.6329 15.5879L28.3126 16.5596C29.7583 18.6253 29.7583 21.3747 28.3126 23.4404C27.1898 25.0442 25.3543 26 23.3966 26H8.6036C6.646 25.9998 4.81021 25.0442 3.68759 23.4404C2.24217 21.3748 2.24215 18.6251 3.68759 16.5596L4.36825 15.5869C4.77711 15.0028 5.01003 14.2821 5.08505 13.4971C5.25073 11.762 5.7505 8.69359 7.29891 6.03125C8.87866 3.31533 11.5764 1.00026 16.005 1Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BellBoldFilled32.category = 'Interface General';

export default BellBoldFilled32;
