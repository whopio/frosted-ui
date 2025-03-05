import * as React from 'react';
import { IconProps } from './types';

export const ListBullet12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M5.875 8.375H10.125M5.875 3.625H10.125"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.875 4.625C3.42728 4.625 3.875 4.17728 3.875 3.625 3.875 3.07271 3.42728 2.625 2.875 2.625 2.32271 2.625 1.875 3.07271 1.875 3.625 1.875 4.17728 2.32271 4.625 2.875 4.625zM2.875 9.375C3.42728 9.375 3.875 8.9273 3.875 8.375 3.875 7.8227 3.42728 7.375 2.875 7.375 2.32271 7.375 1.875 7.8227 1.875 8.375 1.875 8.9273 2.32271 9.375 2.875 9.375z"
        fill={color}
      />
    </svg>
  );
};

export default ListBullet12;
