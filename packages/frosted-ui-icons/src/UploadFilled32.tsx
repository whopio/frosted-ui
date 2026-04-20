import * as React from 'react';
import { IconProps } from './types';

export const UploadFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.75 28.5C30.4404 28.5 31 29.0596 31 29.75C31 30.4403 30.4403 31 29.75 31H2.25C1.55967 31 1.00003 30.4403 1 29.75C1 29.0596 1.55964 28.5 2.25 28.5H29.75ZM15.1162 1.36618C15.6044 0.878023 16.3956 0.878023 16.8838 1.36618L26.6338 11.1162C27.1219 11.6043 27.1219 12.3956 26.6338 12.8838C26.1456 13.3719 25.3544 13.3719 24.8662 12.8838L17.25 5.26754V24.5C17.25 25.1903 16.6903 25.75 16 25.75C15.3097 25.75 14.75 25.1903 14.75 24.5V5.26754L7.13379 12.8838C6.64564 13.3719 5.85436 13.3719 5.36621 12.8838C4.87807 12.3956 4.87809 11.6043 5.36621 11.1162L15.1162 1.36618Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadFilled32.category = 'Arrows';

export default UploadFilled32;
