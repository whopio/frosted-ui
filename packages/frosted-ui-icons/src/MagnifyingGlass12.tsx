import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass12 = ({
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
        d="M5.24989 0C2.35046 0 0 2.35046 0 5.24989C0 8.14933 2.35046 10.4998 5.24989 10.4998C6.42917 10.4998 7.51763 10.111 8.39407 9.45452L10.7197 11.78C11.0126 12.0729 11.4874 12.0729 11.7803 11.78C12.0732 11.4871 12.0732 11.0123 11.7803 10.7194L9.45468 8.39385C10.111 7.51745 10.4998 6.42907 10.4998 5.24989C10.4998 2.35046 8.14933 0 5.24989 0ZM1.49997 5.24989C1.49997 3.17887 3.17887 1.49997 5.24989 1.49997C7.32092 1.49997 8.99982 3.17887 8.99982 5.24989C8.99982 7.32092 7.32092 8.99982 5.24989 8.99982C3.17887 8.99982 1.49997 7.32092 1.49997 5.24989Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MagnifyingGlass12;
