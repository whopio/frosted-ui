import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.1161 4.11533C10.6043 3.62784 11.3957 3.62752 11.8837 4.11533C12.3716 4.60339 12.3715 5.39576 11.8837 5.88389L9.76748 8.0001L11.8837 10.1163C12.3714 10.6044 12.3714 11.3958 11.8837 11.8839C11.3956 12.3719 10.6043 12.3717 10.1161 11.8839L7.99893 9.76767L5.88272 11.8839C5.39462 12.372 4.60331 12.3719 4.11514 11.8839C3.62713 11.3957 3.62703 10.6044 4.11514 10.1163L6.23135 8.0001L4.11514 5.88389C3.62698 5.39573 3.62698 4.60349 4.11514 4.11533C4.60324 3.6276 5.39465 3.62755 5.88272 4.11533L7.99893 6.23252L10.1161 4.11533Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallFilled16.category = 'Interface General';

export default XMarkSmallFilled16;
