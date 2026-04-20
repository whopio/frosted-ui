import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31.999 21.5C31.999 25.6421 28.6412 29 24.499 29H7.5C3.35798 28.9999 0 25.6421 0 21.5V10.875L14.3789 17.25C15.4111 17.7075 16.5889 17.7076 17.6211 17.25L31.999 10.875V21.5ZM24.499 3C28.052 3 31.0251 5.47119 31.7998 8.78809C31.7548 8.80083 31.71 8.81646 31.666 8.83594L16.8105 15.4219C16.2945 15.6506 15.7055 15.6505 15.1895 15.4219L0.333984 8.83594C0.289397 8.81617 0.243855 8.79995 0.198242 8.78711C0.973258 5.47064 3.94742 3.00011 7.5 3H24.499Z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled32.category = 'Communication';

export default MailBoldFilled32;
