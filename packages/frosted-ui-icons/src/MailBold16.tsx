import * as React from 'react';
import { IconProps } from './types';

export const MailBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBold16"
      {...props}
    >
      <path
        d="M11.245 2c2.071 0 3.75 1.679 3.75 3.75v4.5c0 2.071-1.679 3.75-3.75 3.75H4.75C2.68 14 1 12.32 1 10.25v-4.5C1 3.68 2.68 2 4.75 2h6.495zm-2.35 7.125c-.576.232-1.219.232-1.794 0L3 7.472v2.778c0 .966.784 1.75 1.75 1.75h6.495c.967 0 1.75-.784 1.75-1.75V7.472l-4.1 1.653zM4.75 4c-.824 0-1.513.57-1.7 1.336L7.849 7.27c.095.038.204.038.3 0l4.795-1.934C12.757 4.57 12.07 4 11.245 4H4.75z"
        fill={color}
      />
    </svg>
  );
};

MailBold16.category = 'Communication';

export default MailBold16;
