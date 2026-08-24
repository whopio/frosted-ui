import * as React from 'react';
import { IconProps } from './types';

export const CouponActiveBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponActiveBoldFilled32"
      {...props}
    >
      <path
        d="M9.951 0c.92 0 1.62.61 1.928 1.309C12.576 2.895 14.16 4 16 4c1.84 0 3.424-1.105 4.121-2.691C20.428.61 21.13 0 22.05 0H25c2.21 0 4 1.79 4 4v24c0 2.21-1.79 4-4 4h-2.951c-.92 0-1.62-.61-1.928-1.309C19.424 29.105 17.84 28 16 28c-1.84 0-3.424 1.105-4.121 2.691C11.572 31.39 10.87 32 9.95 32H7c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h2.951zM20.5 18c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm1.707-8.207c-.39-.39-1.024-.39-1.414 0l-11 11c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0l11-11c.39-.39.39-1.024 0-1.414zM11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9z"
        fill={color}
      />
    </svg>
  );
};

CouponActiveBoldFilled32.category = 'Money & Shopping';

export default CouponActiveBoldFilled32;
