import * as React from 'react';
import { IconProps } from './types';

export const LockFilled20 = ({
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
        d="M5.75 6C5.75 3.79086 7.54086 2 9.75 2H10.25C12.4591 2 14.25 3.79086 14.25 6V8.75H5.75V6ZM3.78509 9.01354C3.76221 8.92957 3.75 8.84121 3.75 8.75V6C3.75 2.68629 6.43629 0 9.75 0H10.25C13.5637 0 16.25 2.68629 16.25 6V8.75C16.25 8.84121 16.2378 8.92957 16.2149 9.01354C17.1229 9.44845 17.75 10.376 17.75 11.45V16.55C17.75 18.0412 16.5412 19.25 15.05 19.25H4.95C3.45883 19.25 2.25 18.0412 2.25 16.55V11.45C2.25 10.376 2.87708 9.44845 3.78509 9.01354Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LockFilled20;
