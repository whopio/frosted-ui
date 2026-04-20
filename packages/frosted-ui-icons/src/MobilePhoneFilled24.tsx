import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.75 1C17.3734 1 19.5 3.12665 19.5 5.75V18.25C19.5 20.8734 17.3734 23 14.75 23H9.25C6.62665 23 4.5 20.8734 4.5 18.25V5.75C4.5 3.12665 6.62665 1 9.25 1H14.75ZM9.75 18.5C9.33579 18.5 9 18.8358 9 19.25C9 19.6642 9.33579 20 9.75 20H14.25C14.6642 20 15 19.6642 15 19.25C15 18.8358 14.6642 18.5 14.25 18.5H9.75Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled24.category = 'Objects';

export default MobilePhoneFilled24;
