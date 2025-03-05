import * as React from 'react';
import { IconProps } from './types';

export const MailFilled16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M0.0370589 3.39004L6.55662 8.03815C6.97797 8.33855 7.48254 8.5 8 8.5C8.51746 8.5 9.02203 8.33855 9.44338 8.03815L15.9629 3.39004C15.797 2.59622 15.0931 2 14.25 2H1.75C0.906888 2 0.203031 2.59622 0.0370589 3.39004ZM16 5.20581L10.3142 9.25952C9.63862 9.74115 8.82965 10 8 10C7.17036 10 6.36138 9.74115 5.68585 9.25952L0 5.20581V12.25C0 13.2165 0.783502 14 1.75 14H14.25C15.2165 14 16 13.2165 16 12.25V5.20581Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MailFilled16;
