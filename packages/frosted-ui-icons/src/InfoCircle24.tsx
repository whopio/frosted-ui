import * as React from 'react';
import { IconProps } from './types';

export const InfoCircle24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM12.25 9C12.6642 9 13 9.33579 13 9.75V17H15C15.4142 17 15.75 17.3358 15.75 17.75C15.75 18.1642 15.4142 18.5 15 18.5H9C8.58579 18.5 8.25 18.1642 8.25 17.75C8.25 17.3358 8.58579 17 9 17H11.5V10.5H9C8.58579 10.5 8.25 10.1642 8.25 9.75C8.25 9.33579 8.58579 9 9 9H12.25ZM12 5C12.6904 5 13.25 5.55964 13.25 6.25C13.25 6.94036 12.6904 7.5 12 7.5C11.3096 7.5 10.75 6.94036 10.75 6.25C10.75 5.55964 11.3096 5 12 5Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircle24.category = 'Interface General';

export default InfoCircle24;
