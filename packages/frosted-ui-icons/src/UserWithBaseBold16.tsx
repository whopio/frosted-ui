import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00067 9C10.3567 9.00011 12.9478 10.0131 13.9645 12.8379C14.3875 14.0133 13.4113 14.9997 12.3962 15H3.60516C2.58983 15 1.61372 14.0135 2.0368 12.8379L2.13739 12.5781C3.21611 9.95074 5.71827 9 8.00067 9ZM8.00067 11C6.35109 11 4.89226 11.6068 4.15009 13H11.8513C11.1092 11.6068 9.65016 11.0001 8.00067 11ZM8.00067 1C9.93346 1.00025 11.5007 2.56716 11.5007 4.5C11.5007 6.43284 9.93346 7.99975 8.00067 8C6.06768 8 4.50067 6.433 4.50067 4.5C4.50067 2.567 6.06768 1 8.00067 1ZM8.00067 3C7.17224 3 6.50067 3.67157 6.50067 4.5C6.50067 5.32843 7.17224 6 8.00067 6C8.82889 5.99975 9.50067 5.32827 9.50067 4.5C9.50067 3.67173 8.82889 3.00025 8.00067 3Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBaseBold16.category = 'People';

export default UserWithBaseBold16;
