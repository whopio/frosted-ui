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
        d="M12 1C16.1421 1 19.5 4.35786 19.5 8.5V10.1865C21.2372 10.7203 22.5 12.3378 22.5 14.25V18.75C22.5 21.0972 20.5972 23 18.25 23H5.75C3.40279 23 1.5 21.0972 1.5 18.75V14.25C1.5 12.3378 2.76279 10.7203 4.5 10.1865V8.5C4.5 4.35786 7.85786 1 12 1ZM12 2.5C8.68629 2.5 6 5.18629 6 8.5V10H18V8.5C18 5.18629 15.3137 2.5 12 2.5Z"
        fill={color}
      />
    </svg>
  );
};

LockFilled24.category = 'Security';

export default LockFilled24;
