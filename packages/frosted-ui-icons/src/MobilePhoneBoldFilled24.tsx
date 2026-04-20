import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15 1C17.7614 1 20 3.23858 20 6V18C20 20.7614 17.7614 23 15 23H9C6.23858 23 4 20.7614 4 18V6C4 3.23858 6.23858 1 9 1H15ZM9.75 19C9.19772 19 8.75 19.4477 8.75 20C8.75 20.5523 9.19772 21 9.75 21H14.25C14.8023 21 15.25 20.5523 15.25 20C15.25 19.4477 14.8023 19 14.25 19H9.75Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBoldFilled24.category = 'Objects';

export default MobilePhoneBoldFilled24;
