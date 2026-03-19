import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilledBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.75 26.165C12.7502 24.3713 14.2043 22.9162 15.998 22.916C17.7918 22.9162 19.2469 24.3713 19.2471 26.165C19.2469 27.9588 17.7918 29.4129 15.998 29.4131C14.2043 29.4129 12.7502 27.9588 12.75 26.165ZM12.75 15.999C12.75 14.2051 14.2042 12.7502 15.998 12.75C17.7919 12.7502 19.2471 14.2051 19.2471 15.999C19.2467 17.7926 17.7917 19.2469 15.998 19.2471C14.2044 19.2469 12.7503 17.7926 12.75 15.999ZM12.75 5.83496C12.7503 4.04129 14.2044 2.58611 15.998 2.58594C17.7917 2.58612 19.2468 4.04129 19.2471 5.83496C19.2469 7.6287 17.7918 9.08283 15.998 9.08301C14.2043 9.08283 12.7502 7.62871 12.75 5.83496Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilledBold32.category = 'Product Icons';

export default ThreeDotsVerticalFilledBold32;
