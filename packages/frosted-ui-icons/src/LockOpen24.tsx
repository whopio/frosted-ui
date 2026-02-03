import * as React from 'react';
import { IconProps } from './types';

export const LockOpen24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C15.2996 0 18.1012 2.13116 19.1045 5.0918C19.2604 5.55247 18.8946 5.99995 18.4082 6C18.0571 6 17.7549 5.76024 17.6338 5.43066C16.7908 3.13661 14.5864 1.5 12 1.5C8.68629 1.5 6 4.18629 6 7.5V10H18.25C20.5972 10 22.5 11.9028 22.5 14.25V19.75C22.5 22.0972 20.5972 24 18.25 24H5.75C3.40279 24 1.5 22.0972 1.5 19.75V14.25C1.5 12.3378 2.76279 10.7203 4.5 10.1865V7.5C4.5 3.35786 7.85786 0 12 0Z"
        fill={color}
      />
    </svg>
  );
};

export default LockOpen24;
