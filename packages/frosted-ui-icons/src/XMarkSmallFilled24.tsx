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
        d="M16.1162 6.11646C16.6044 5.6285 17.3957 5.62837 17.8838 6.11646C18.3718 6.60455 18.3717 7.3959 17.8838 7.88403L13.7676 12.0002L17.8838 16.1165C18.3717 16.6046 18.3718 17.3959 17.8838 17.884C17.3957 18.372 16.6043 18.3719 16.1162 17.884L12 13.7678L7.88379 17.884C7.39567 18.3722 6.60437 18.3721 6.11621 17.884C5.62806 17.3959 5.62806 16.6046 6.11621 16.1165L10.2324 12.0002L6.11621 7.88403C5.6281 7.39593 5.6282 6.60462 6.11621 6.11646C6.60437 5.6284 7.39567 5.62833 7.88379 6.11646L12 10.2327L16.1162 6.11646Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallFilled24.category = 'Interface General';

export default XMarkSmallFilled24;
