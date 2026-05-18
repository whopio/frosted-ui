import * as React from 'react';
import { IconProps } from './types';

export const PlayBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.75 26.937V5.06294C6.75 2.63568 9.48244 1.21327 11.4707 2.60549L27.0904 13.5425C28.7961 14.7369 28.7961 17.2631 27.0904 18.4574L11.4707 29.3945C9.48244 30.7867 6.75 29.3643 6.75 26.937Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold32.category = 'Sound & Music';

export default PlayBold32;
