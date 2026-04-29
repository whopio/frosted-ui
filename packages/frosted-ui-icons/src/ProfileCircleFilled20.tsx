import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10.001 12.498C7.17101 12.4983 5.48069 14.4365 4.71289 16.002C6.12272 17.2448 7.9728 18 10 18C12.0279 18 13.8781 17.2437 15.2881 16C14.5195 14.435 12.8299 12.498 10.001 12.498ZM10.002 5.00488C8.34639 5.00488 7.00404 6.3474 7.00391 8.00293C7.00404 9.65846 8.34639 11.001 10.002 11.001C11.6574 11.0008 12.9999 9.65838 13 8.00293C12.9999 6.34748 11.6574 5.00501 10.002 5.00488Z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleFilled20.category = 'People';

export default ProfileCircleFilled20;
