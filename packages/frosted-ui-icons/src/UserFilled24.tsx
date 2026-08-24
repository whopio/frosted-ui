import * as React from 'react';
import { IconProps } from './types';

export const UserFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserFilled24"
      {...props}
    >
      <path
        d="M12 14c4.033 0 8.211 1.835 9.758 6.703.387 1.22-.6 2.297-1.743 2.297H3.985c-1.144 0-2.13-1.076-1.743-2.297C3.79 15.835 7.967 14 12 14zm0-13c3.037 0 5.5 2.462 5.5 5.5S15.037 12 12 12c-3.038 0-5.5-2.462-5.5-5.5S8.962 1 12 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserFilled24.category = 'People';

export default UserFilled24;
