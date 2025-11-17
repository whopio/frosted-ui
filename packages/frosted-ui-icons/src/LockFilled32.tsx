import * as React from 'react';
import { IconProps } from './types';

export const LockFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.75 10.25C7.75 5.69365 11.4437 2 16 2C20.5563 2 24.25 5.69365 24.25 10.25V14.25H7.75V10.25ZM5.76882 14.4441C5.75647 14.3813 5.75 14.3164 5.75 14.25V10.25C5.75 4.58908 10.3391 0 16 0C21.6609 0 26.25 4.58908 26.25 10.25V14.25C26.25 14.3164 26.2435 14.3813 26.2312 14.4441C27.9803 14.9893 29.25 16.6214 29.25 18.55V26.95C29.25 29.3248 27.3248 31.25 24.95 31.25H7.05C4.67517 31.25 2.75 29.3248 2.75 26.95V18.55C2.75 16.6214 4.01971 14.9893 5.76882 14.4441Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LockFilled32;
