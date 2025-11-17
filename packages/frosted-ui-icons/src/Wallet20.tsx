import * as React from 'react';
import { IconProps } from './types';

export const Wallet20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.0411 5.41665C16.0411 4.61123 15.3882 3.95831 14.5828 3.95831H3.29106C2.71576 3.95831 2.24939 4.42468 2.24939 4.99998M2.24939 4.99998V14.375C2.24939 15.2955 2.99558 16.0416 3.91606 16.0416H15.9994C16.9199 16.0416 17.666 15.2955 17.666 14.375V7.70831C17.666 6.78784 16.9199 6.04165 15.9994 6.04165H3.29106C2.71576 6.04165 2.24939 5.57528 2.24939 4.99998ZM14.3745 11.0416C14.3745 11.3868 14.0946 11.6666 13.7495 11.6666C13.4043 11.6666 13.1245 11.3868 13.1245 11.0416C13.1245 10.6965 13.4043 10.4166 13.7495 10.4166C14.0946 10.4166 14.3745 10.6965 14.3745 11.0416Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Wallet20;
