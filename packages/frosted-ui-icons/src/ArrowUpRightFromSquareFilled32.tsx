import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.5 1.5C12.1904 1.5 12.75 2.05964 12.75 2.75C12.75 3.44036 12.1904 4 11.5 4H9.75C6.29822 4 3.5 6.79822 3.5 10.25V22.25C3.5 25.7018 6.29822 28.5 9.75 28.5H21.75C25.2018 28.5 28 25.7018 28 22.25V20.5C28 19.8096 28.5596 19.25 29.25 19.25C29.9404 19.25 30.5 19.8096 30.5 20.5V22.25C30.5 27.0825 26.5825 31 21.75 31H9.75C4.91751 31 1 27.0825 1 22.25V10.25C1 5.41751 4.91751 1.5 9.75 1.5H11.5ZM29.75 1C30.4404 1 31 1.55964 31 2.25V12.75C31 13.4404 30.4404 14 29.75 14C29.0596 14 28.5 13.4404 28.5 12.75V5.26758L16.8838 16.8838C16.3956 17.3719 15.6044 17.3719 15.1162 16.8838C14.6281 16.3956 14.6281 15.6044 15.1162 15.1162L26.7324 3.5H19.25C18.5596 3.5 18 2.94036 18 2.25C18 1.55964 18.5596 1 19.25 1H29.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareFilled32.category = 'Arrows';

export default ArrowUpRightFromSquareFilled32;
