import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.4693 3.85267C14.0408 1.13854 17.9603 1.13937 19.5318 3.85365L30.689 23.1261C32.2634 25.8459 30.3013 29.2498 27.1587 29.2501H4.8423C1.69954 29.2499 -0.262602 25.846 1.31203 23.1261L12.4693 3.85267ZM16.0005 22.0001C15.3102 22.0001 14.7505 22.5598 14.7505 23.2501C14.7506 23.9404 15.3102 24.5001 16.0005 24.5001C16.6907 24.5 17.2504 23.9404 17.2505 23.2501C17.2505 22.5599 16.6908 22.0002 16.0005 22.0001ZM16.0015 9.75013C15.4492 9.75013 15.0015 10.1978 15.0015 10.7501V19.2501C15.0016 19.8024 15.4492 20.2501 16.0015 20.2501C16.5536 20.25 17.0014 19.8023 17.0015 19.2501V10.7501C17.0015 10.1979 16.5537 9.75023 16.0015 9.75013Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled32.category = 'Interface General';

export default ExclamationTriangleBoldFilled32;
