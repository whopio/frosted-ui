import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.4004 1C16.4929 1.00021 18.9998 3.50712 19 6.59961V13.4004C18.9998 16.4929 16.4929 18.9998 13.4004 19H6.59961C3.50713 18.9998 1.00021 16.4929 1 13.4004V6.59961C1.00021 3.50712 3.50712 1.00021 6.59961 1H13.4004ZM10 8.625C9.3788 8.625 8.8752 9.12885 8.875 9.75V14C8.8752 14.6212 9.3788 15.125 10 15.125C10.621 15.1247 11.1248 14.621 11.125 14V9.75C11.1248 9.12901 10.621 8.62526 10 8.625ZM10 4.75C9.30977 4.75 8.7502 5.30981 8.75 6C8.7502 6.69019 9.30977 7.25 10 7.25C10.6902 7.25 11.2498 6.69019 11.25 6C11.2498 5.30981 10.6902 4.75 10 4.75Z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareBoldFilled20.category = 'Interface General';

export default InfoSquareBoldFilled20;
