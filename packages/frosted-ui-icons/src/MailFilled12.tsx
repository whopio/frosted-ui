import * as React from 'react';
import { IconProps } from './types';

export const MailFilled12 = ({
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
        d="M0.101369 2.16163L4.51014 5.0548C4.95274 5.34526 5.4706 5.5 6 5.5C6.5294 5.5 7.04726 5.34526 7.48986 5.0548L11.8986 2.16163C11.657 1.48456 11.0101 1 10.25 1H1.75C0.989924 1 0.343024 1.48456 0.101369 2.16163ZM12 3.88925L8.31283 6.30888C7.62574 6.75978 6.82183 7 6 7C5.17817 7 4.37426 6.75978 3.68717 6.30888L0 3.88924V9.25C0 10.2165 0.783502 11 1.75 11H10.25C11.2165 11 12 10.2165 12 9.25V3.88925Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MailFilled12;
