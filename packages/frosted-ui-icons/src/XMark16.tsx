import * as React from 'react';
import { IconProps } from './types';

export const XMark16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.9697 1.96983C13.2626 1.67712 13.7374 1.677 14.0303 1.96983C14.323 2.26267 14.323 2.73751 14.0303 3.03038L9.06055 8.00011L14.0303 12.9698C14.323 13.2627 14.323 13.7375 14.0303 14.0304C13.7374 14.3231 13.2626 14.3231 12.9697 14.0304L8 9.06065L3.03027 14.0304C2.73741 14.3232 2.26262 14.3232 1.96973 14.0304C1.67684 13.7375 1.67684 13.2627 1.96973 12.9698L6.93945 8.00011L1.96973 3.03038C1.67687 2.73752 1.67694 2.26274 1.96973 1.96983C2.26263 1.67704 2.73741 1.67697 3.03027 1.96983L8 6.93956L12.9697 1.96983Z"
        fill={color}
      />
    </svg>
  );
};

XMark16.category = 'Interface General';

export default XMark16;
