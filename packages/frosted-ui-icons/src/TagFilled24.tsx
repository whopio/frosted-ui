import * as React from 'react';
import { IconProps } from './types';

export const TagFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagFilled24"
      {...props}
    >
      <path
        d="M19 1C21.209 1 22.9998 2.79106 23 5V10.6562C23 12.1812 22.3947 13.6443 21.3164 14.7227L14.4297 21.6094C12.5748 23.4642 9.56689 23.4641 7.71191 21.6094L2.39062 16.2881C0.536233 14.4331 0.535885 11.4251 2.39062 9.57031L9.27734 2.68359C10.3556 1.60544 11.819 1.00012 13.3438 1H19ZM16 5C14.3433 5.0002 13 6.34327 13 8C13 9.65673 14.3433 10.9998 16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5Z"
        fill={color}
      />
    </svg>
  );
};

TagFilled24.category = 'Interface General';

export default TagFilled24;
