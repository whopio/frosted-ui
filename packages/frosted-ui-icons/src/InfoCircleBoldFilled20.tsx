import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 8.625C9.3788 8.625 8.8752 9.12885 8.875 9.75V14C8.8752 14.6212 9.3788 15.125 10 15.125C10.621 15.1247 11.1248 14.621 11.125 14V9.75C11.1248 9.12901 10.621 8.62526 10 8.625ZM10 4.75C9.30977 4.75 8.7502 5.30981 8.75 6C8.7502 6.69019 9.30977 7.25 10 7.25C10.6902 7.25 11.2498 6.69019 11.25 6C11.2498 5.30981 10.6902 4.75 10 4.75Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBoldFilled20.category = 'Interface General';

export default InfoCircleBoldFilled20;
