import * as React from 'react';
import { IconProps } from './types';

export const User12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="User12"
      {...props}
    >
      <path
        d="M6 7c1.082 0 2.244.2 3.223.84 1.004.657 1.733 1.722 2.015 3.276.074.407-.197.798-.604.872-.408.074-.798-.197-.872-.605-.218-1.195-.739-1.88-1.36-2.287C7.756 8.674 6.918 8.5 6 8.5c-.918 0-1.756.174-2.402.596-.62.406-1.142 1.091-1.36 2.287-.073.408-.464.679-.871.605-.408-.074-.679-.465-.605-.872.283-1.554 1.012-2.619 2.016-3.275C3.756 7.2 4.918 7 6 7zm0-7c1.657 0 3 1.343 3 3S7.657 6 6 6 3 4.657 3 3s1.343-3 3-3zm0 1.5c-.828 0-1.5.671-1.5 1.5 0 .828.672 1.5 1.5 1.5.829 0 1.5-.672 1.5-1.5S6.83 1.5 6 1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

User12.category = 'People';

export default User12;
