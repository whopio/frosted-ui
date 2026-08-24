import * as React from 'react';
import { IconProps } from './types';

export const AppleWallet12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AppleWallet12"
      {...props}
    >
      <path
        d="M9.25 1.5C10.769 1.5 12 2.731 12 4.25v3.5c0 1.519-1.231 2.75-2.75 2.75h-6.5C1.231 10.5 0 9.269 0 7.75v-3.5C0 2.731 1.231 1.5 2.75 1.5h6.5zM1.5 7.75C1.5 8.44 2.06 9 2.75 9h6.5c.69 0 1.25-.56 1.25-1.25v-1H8.77c-.083 0-.165.016-.242.047l-1.73.691c-.512.205-1.084.205-1.597 0l-1.73-.691c-.076-.03-.158-.047-.24-.047H1.5v1zM2.75 3c-.69 0-1.25.56-1.25 1.25v1h1.73c.274 0 .545.052.8.153l1.729.693c.155.062.327.062.482 0l1.73-.693c.254-.101.525-.153.799-.153h1.73v-1C10.5 3.56 9.94 3 9.25 3h-6.5z"
        fill={color}
      />
    </svg>
  );
};

AppleWallet12.category = 'Money & Shopping';

export default AppleWallet12;
