import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.1162 6.11636C16.6044 5.62841 17.3957 5.62828 17.8838 6.11636C18.3718 6.60446 18.3717 7.3958 17.8838 7.88394L13.7676 12.0002L17.8838 16.1164C18.3717 16.6045 18.3718 17.3958 17.8838 17.8839C17.3957 18.3719 16.6043 18.3718 16.1162 17.8839L12 13.7677L7.88379 17.8839C7.39567 18.3721 6.60438 18.372 6.11621 17.8839C5.62806 17.3958 5.62806 16.6045 6.11621 16.1164L10.2324 12.0002L6.11621 7.88394C5.6281 7.39583 5.6282 6.60453 6.11621 6.11636C6.60437 5.62831 7.39567 5.62824 7.88379 6.11636L12 10.2326L16.1162 6.11636Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallFilled24.category = 'Interface General';

export default XMarkSmallFilled24;
