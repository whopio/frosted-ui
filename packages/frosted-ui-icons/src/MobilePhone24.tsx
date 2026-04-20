import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.75 1C17.3734 1 19.5 3.12665 19.5 5.75V18.25C19.5 20.8734 17.3734 23 14.75 23H9.25C6.62665 23 4.5 20.8734 4.5 18.25V5.75C4.5 3.12665 6.62665 1 9.25 1H14.75ZM9.25 2.5C7.45507 2.5 6 3.95507 6 5.75V18.25C6 20.0449 7.45507 21.5 9.25 21.5H14.75C16.5449 21.5 18 20.0449 18 18.25V5.75C18 3.95507 16.5449 2.5 14.75 2.5H9.25ZM14.25 18.5C14.6642 18.5 15 18.8358 15 19.25C15 19.6642 14.6642 20 14.25 20H9.75C9.33579 20 9 19.6642 9 19.25C9 18.8358 9.33579 18.5 9.75 18.5H14.25Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhone24.category = 'Objects';

export default MobilePhone24;
