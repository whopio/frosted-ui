import * as React from 'react';
import { IconProps } from './types';

export const Lightning12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Lightning12"
      {...props}
    >
      <path
        d="M8.12 0c.742 0 1.23.776.908 1.445L7.79 4.018h1.75c.86 0 1.325 1.01.764 1.664l-5.113 5.954c-.665.774-1.928.182-1.759-.824L3.991 7.5H2.454c-.683 0-1.168-.664-.96-1.314L3.209.82 3.24.73C3.42.292 3.85 0 4.33 0H8.12zM3.128 6h1.597c.544 0 .957.49.866 1.025l-.386 2.29 3.262-3.797H6.801c-.647 0-1.072-.678-.792-1.261L7.337 1.5h-2.77L3.126 6z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Lightning12.category = 'Nature & Weather';

export default Lightning12;
