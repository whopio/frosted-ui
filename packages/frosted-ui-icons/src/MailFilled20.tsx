import * as React from 'react';
import { IconProps } from './types';

export const MailFilled20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M2 2C0.895431 2 0 2.89543 0 4V5.35317L8.23462 10.9563C8.75521 11.3106 9.37032 11.5 10 11.5C10.6297 11.5 11.2448 11.3106 11.7654 10.9563L20 5.35317V4C20 2.89543 19.1046 2 18 2H2ZM20 7.16749L12.6092 12.1965C11.8398 12.72 10.9307 13 10 13C9.06934 13 8.16021 12.72 7.39078 12.1965L0 7.16749V16C0 17.1046 0.895431 18 2 18H18C19.1046 18 20 17.1046 20 16V7.16749Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MailFilled20;
