import * as React from 'react';
import { IconProps } from './types';

export const LockOpenBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 1C14.7871 1 17.2401 2.42625 18.6719 4.58789C19.0935 5.22513 18.5807 6 17.8164 6C17.432 5.99984 17.0823 5.79059 16.8564 5.47949C15.7662 3.97762 13.9979 3 12 3C8.68629 3 6 5.68629 6 9V9.75H18C20.4853 9.75 22.5 11.7647 22.5 14.25V18.5C22.5 20.9853 20.4853 23 18 23H6C3.51472 23 1.5 20.9853 1.5 18.5V14.25C1.5 12.4831 2.51828 10.9541 4 10.2178V9C4 4.58172 7.58172 1 12 1Z"
        fill={color}
      />
    </svg>
  );
};

LockOpenBoldFilled24.category = 'Security';

export default LockOpenBoldFilled24;
