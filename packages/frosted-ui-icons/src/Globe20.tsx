import * as React from 'react';
import { IconProps } from './types';

export const Globe20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 2.5C9.82831 2.5 9.58572 2.5853 9.28378 2.90949C8.98082 3.23477 8.67346 3.74635 8.39971 4.44126C8.16736 5.03108 7.96977 5.72598 7.81945 6.5H12.1805C12.0302 5.72598 11.8326 5.03108 11.6003 4.44126C11.3265 3.74635 11.0192 3.23477 10.7162 2.90949C10.4143 2.5853 10.1717 2.5 10 2.5ZM7.0041 3.89148C6.70574 4.64885 6.46492 5.53147 6.29398 6.5L3.36505 6.5C4.22988 4.86393 5.68213 3.58629 7.44097 2.94791C7.28139 3.24042 7.13584 3.55704 7.0041 3.89148ZM6.0927 8H2.76962C2.59388 8.63672 2.5 9.30739 2.5 10C2.5 10.6926 2.59388 11.3633 2.76962 12H6.0927C6.03187 11.3555 6 10.6858 6 10C6 9.31421 6.03187 8.64446 6.0927 8ZM6.29398 13.5H3.36505C4.22988 15.1361 5.68213 16.4137 7.44097 17.0521C7.28139 16.7596 7.13584 16.443 7.0041 16.1085C6.70574 15.3512 6.46492 14.4685 6.29398 13.5ZM7.81945 13.5L12.1805 13.5C12.0302 14.274 11.8326 14.9689 11.6003 15.5587C11.3265 16.2537 11.0192 16.7652 10.7162 17.0905C10.4143 17.4147 10.1717 17.5 10 17.5C9.82831 17.5 9.58572 17.4147 9.28378 17.0905C8.98082 16.7652 8.67346 16.2537 8.39971 15.5587C8.16736 14.9689 7.96977 14.274 7.81945 13.5ZM12.4001 12L7.59989 12C7.53498 11.3643 7.5 10.6942 7.5 10C7.5 9.30581 7.53498 8.63566 7.59989 8H12.4001C12.465 8.63566 12.5 9.30581 12.5 10C12.5 10.6942 12.465 11.3643 12.4001 12ZM13.706 13.5C13.5351 14.4685 13.2943 15.3512 12.9959 16.1085C12.8642 16.443 12.7186 16.7596 12.559 17.0521C14.3179 16.4137 15.7701 15.1361 16.635 13.5H13.706ZM17.2304 12H13.9073C13.9681 11.3555 14 10.6858 14 10C14 9.31421 13.9681 8.64446 13.9073 8H17.2304C17.4061 8.63672 17.5 9.3074 17.5 10C17.5 10.6926 17.4061 11.3633 17.2304 12ZM12.559 2.94791C14.3179 3.58629 15.7701 4.86393 16.635 6.5L13.706 6.5C13.5351 5.53147 13.2943 4.64885 12.9959 3.89148C12.8642 3.55704 12.7186 3.24042 12.559 2.94791ZM10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Globe20;
