import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5 1C14.7091 1 16.5 2.79086 16.5 5V15C16.5 17.2091 14.7091 19 12.5 19H7.5C5.29086 19 3.5 17.2091 3.5 15V5C3.5 2.79086 5.29086 1 7.5 1H12.5ZM7.5 2.5C6.11929 2.5 5 3.61929 5 5V15C5 16.3807 6.11929 17.5 7.5 17.5H12.5C13.8807 17.5 15 16.3807 15 15V5C15 3.61929 13.8807 2.5 12.5 2.5H7.5ZM11.75 14.5C12.1642 14.5 12.5 14.8358 12.5 15.25C12.5 15.6642 12.1642 16 11.75 16H8.25C7.83579 16 7.5 15.6642 7.5 15.25C7.5 14.8358 7.83579 14.5 8.25 14.5H11.75Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhone20.category = 'Objects';

export default MobilePhone20;
