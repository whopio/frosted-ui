import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M28.1161 2.11611C28.6043 1.62798 29.3955 1.62797 29.8837 2.11611C30.3717 2.60427 30.3718 3.39557 29.8837 3.88369L17.7675 15.9999L29.8837 28.1161C30.3717 28.6043 30.3718 29.3956 29.8837 29.8837C29.3956 30.3718 28.6043 30.3717 28.1161 29.8837L15.9999 17.7675L3.88369 29.8837C3.39557 30.3718 2.60427 30.3717 2.11611 29.8837C1.62797 29.3955 1.62796 28.6043 2.11611 28.1161L14.2323 15.9999L2.11611 3.88369C1.62796 3.39554 1.62797 2.60426 2.11611 2.11611C2.60427 1.62797 3.39554 1.62796 3.88369 2.11611L15.9999 14.2323L28.1161 2.11611Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkFilled32.category = 'Interface General';

export default XMarkFilled32;
