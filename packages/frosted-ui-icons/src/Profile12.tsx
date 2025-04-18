import * as React from 'react';
import { IconProps } from './types';

export const Profile12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.8756 3.25C7.8756 4.28553 7.03615 5.125 6.0006 5.125 4.96508 5.125 4.12561 4.28553 4.12561 3.25 4.12561 2.21447 4.96508 1.375 6.0006 1.375 7.03615 1.375 7.8756 2.21447 7.8756 3.25zM6.00055 6.625C4.30498 6.625 3.01855 7.63215 2.4918 9.05645 2.2874 9.6091 2.75972 10.125 3.34898 10.125H8.65215C9.2414 10.125 9.7137 9.6091 9.5093 9.05645 8.98255 7.63215 7.69615 6.625 6.00055 6.625z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Profile12;
