import * as React from 'react';
import { IconProps } from './types';

export const ListBulletBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.375 7.25C2.99632 7.25 3.5 7.75366 3.5 8.375C3.5 8.99634 2.99632 9.5 2.375 9.5C1.75368 9.5 1.25 8.99634 1.25 8.375C1.25 7.75366 1.75368 7.25 2.375 7.25ZM9.875 7.375C10.4273 7.375 10.875 7.82272 10.875 8.375C10.875 8.92728 10.4273 9.375 9.875 9.375H5.625C5.07272 9.375 4.625 8.92728 4.625 8.375C4.625 7.82272 5.07272 7.375 5.625 7.375H9.875ZM2.375 2.5C2.99632 2.5 3.5 3.00368 3.5 3.625C3.5 4.24632 2.99632 4.75 2.375 4.75C1.75368 4.75 1.25 4.24632 1.25 3.625C1.25 3.00368 1.75368 2.5 2.375 2.5ZM9.875 2.625C10.4273 2.625 10.875 3.07272 10.875 3.625C10.875 4.17728 10.4273 4.625 9.875 4.625H5.625C5.07272 4.625 4.625 4.17728 4.625 3.625C4.625 3.07272 5.07272 2.625 5.625 2.625H9.875Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ListBulletBold12.category = 'Text Formatting';

export default ListBulletBold12;
