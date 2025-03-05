import * as React from 'react';
import { IconProps } from './types';

export const MailOut12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_882_336)">
        <path
          d="M9.94219 5V3.54038C9.94219 2.82772 9.36447 2.25 8.65181 2.25H2.04037C1.32772 2.25 0.75 2.82772 0.75 3.54038V8.45963C0.75 9.17228 1.32772 9.75 2.04037 9.75H7.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 3.81839L4.32409 5.96651C4.63272 6.152 4.98601 6.25 5.34609 6.25V6.25C5.70618 6.25 6.05947 6.152 6.3681 5.96651L9.94219 3.81839"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8198 7.82209L10.4256 6.44592C10.2677 6.29 10 6.4019 10 6.62384V9.37617C10 9.59812 10.2677 9.71001 10.4256 9.55409L11.8198 8.17793C11.9189 8.08004 11.9189 7.91997 11.8198 7.82209Z"
          fill={color}
        />
        <path
          d="M8 8H10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_882_336">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailOut12;
