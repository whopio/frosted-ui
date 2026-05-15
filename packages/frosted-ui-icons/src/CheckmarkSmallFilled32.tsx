import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.3661 9.11625C24.8543 8.62813 25.6455 8.62811 26.1337 9.11625C26.6217 9.60441 26.6218 10.3957 26.1337 10.8838L12.6337 24.3838C12.1456 24.8719 11.3543 24.8719 10.8661 24.3838L4.8661 18.3838C4.37796 17.8957 4.37797 17.1044 4.8661 16.6163C5.35426 16.1281 6.14553 16.1281 6.63368 16.6163L11.7499 21.7325L24.3661 9.11625Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallFilled32.category = 'Checkmarks';

export default CheckmarkSmallFilled32;
