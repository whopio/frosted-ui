import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.25 0C14.8734 0 17 2.12665 17 4.75V15.25C17 17.8734 14.8734 20 12.25 20H7.75C5.12665 20 3 17.8734 3 15.25V4.75C3 2.12665 5.12665 0 7.75 0H12.25ZM8.25 15.5C7.83579 15.5 7.5 15.8358 7.5 16.25C7.5 16.6642 7.83579 17 8.25 17H11.75C12.1642 17 12.5 16.6642 12.5 16.25C12.5 15.8358 12.1642 15.5 11.75 15.5H8.25Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled20.category = 'Objects';

export default MobilePhoneFilled20;
