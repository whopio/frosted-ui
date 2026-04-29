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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12.25 9C12.6642 9 13 9.33579 13 9.75V17H15C15.4142 17 15.75 17.3358 15.75 17.75C15.75 18.1642 15.4142 18.5 15 18.5H9C8.58579 18.5 8.25 18.1642 8.25 17.75C8.25 17.3358 8.58579 17 9 17H11.5V10.5H9C8.58579 10.5 8.25 10.1642 8.25 9.75C8.25 9.33579 8.58579 9 9 9H12.25ZM12 5C12.6904 5 13.25 5.55964 13.25 6.25C13.25 6.94036 12.6904 7.5 12 7.5C11.3096 7.5 10.75 6.94036 10.75 6.25C10.75 5.55964 11.3096 5 12 5Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircle24.category = 'Interface General';

export default InfoCircle24;
