import * as React from 'react';
import { IconProps } from './types';

export const Link24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.78125 10.4688L4.14797 13.102C3.25286 13.9971 2.75 15.2112 2.75 16.477V16.477C2.75 19.1131 4.88693 21.25 7.52297 21.25V21.25C8.78884 21.25 10.0029 20.7471 10.898 19.852L13.5312 17.2188M17.2188 13.5312L19.852 10.898C20.7471 10.0029 21.25 8.78884 21.25 7.52297V7.52297C21.25 4.88693 19.1131 2.75 16.477 2.75V2.75C15.2112 2.75 13.9971 3.25286 13.102 4.14797L10.4688 6.78125M8.75 15.25L15.25 8.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Link24;
