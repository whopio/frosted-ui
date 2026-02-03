import * as React from 'react';
import { IconProps } from './types';

export const LockFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C16.1421 0 19.5 3.35786 19.5 7.5V10.1865C21.2372 10.7203 22.5 12.3378 22.5 14.25V19.75C22.5 22.0972 20.5972 24 18.25 24H5.75C3.40279 24 1.5 22.0972 1.5 19.75V14.25C1.5 12.3378 2.76279 10.7203 4.5 10.1865V7.5C4.5 3.35786 7.85786 0 12 0ZM12 1.5C8.68629 1.5 6 4.18629 6 7.5V10H18V7.5C18 4.18629 15.3137 1.5 12 1.5Z"
        fill={color}
      />
    </svg>
  );
};

export default LockFilled24;
