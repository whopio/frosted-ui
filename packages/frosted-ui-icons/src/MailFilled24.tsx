import * as React from 'react';
import { IconProps } from './types';

export const MailFilled24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M3 3C1.34315 3 0 4.34315 0 6V6.04638L10.0771 12.6743C10.6481 13.0499 11.3166 13.25 12 13.25C12.6834 13.25 13.3519 13.0499 13.9229 12.6743L24 6.04638V6C24 4.34315 22.6569 3 21 3H3ZM24 8.44021L15.022 14.3453C14.1246 14.9355 13.0741 15.25 12 15.25C10.9259 15.25 9.87538 14.9355 8.97802 14.3453L0 8.44021V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V8.44021Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MailFilled24;
