import * as React from 'react';
import { IconProps } from './types';

export const Cursor16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Cursor16"
      {...props}
    >
      <path
        d="M5.12 13.565L1.77 3.347c-.32-.974.603-1.897 1.577-1.578l10.218 3.35c.925.304.975 1.593.077 1.968l-2.014.839c-.657.273-.825 1.127-.322 1.63l2.582 2.582c.232.232.362.546.362.875 0 .683-.554 1.237-1.237 1.237-.329 0-.643-.13-.875-.362l-2.582-2.582c-.503-.503-1.357-.335-1.63.322l-.84 2.014c-.374.898-1.663.848-1.966-.077z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Cursor16.category = 'Arrows';

export default Cursor16;
