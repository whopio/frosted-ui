import * as React from 'react';
import { IconProps } from './types';

export const BanBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM4.88281 12.5303C5.76894 13.1412 6.8423 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 6.8423 13.1412 5.76894 12.5303 4.88281L4.88281 12.5303ZM8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 9.15721 2.85833 10.2303 3.46875 11.1162L11.1162 3.46875C10.2303 2.85833 9.15721 2.5 8 2.5Z"
        fill={color}
      />
    </svg>
  );
};

BanBold16.category = 'Interface General';

export default BanBold16;
