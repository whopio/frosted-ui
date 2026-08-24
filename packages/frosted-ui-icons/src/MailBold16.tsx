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
        d="M12.245 2c2.071 0 3.75 1.679 3.75 3.75v4.5c0 2.071-1.679 3.75-3.75 3.75H3.75C1.679 14 0 12.321 0 10.25v-4.5C0 3.679 1.679 2 3.75 2h8.495zm-3.35 7.125c-.576.232-1.219.232-1.794 0L2 7.069v3.181c0 .966.784 1.75 1.75 1.75h8.495c.967 0 1.75-.784 1.75-1.75V7.07l-5.1 2.055zM3.75 4c-.692 0-1.288.402-1.572.984l5.67 2.287c.096.038.204.038.3 0l5.668-2.287c-.284-.582-.88-.984-1.57-.984H3.75z"
        fill={color}
      />
    </svg>
  );
};

MailBold16.category = 'Communication';

export default MailBold16;
