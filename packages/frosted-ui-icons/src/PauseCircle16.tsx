import * as React from 'react';
import { IconProps } from './types';

export const PauseCircle16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM6.25 5C6.66421 5 7 5.33579 7 5.75V10.25C6.99995 10.6642 6.66418 11 6.25 11C5.83582 11 5.50005 10.6642 5.5 10.25V5.75C5.5 5.33579 5.83579 5 6.25 5ZM9.75 5C10.1642 5 10.5 5.33579 10.5 5.75V10.25C10.4999 10.6642 10.1642 11 9.75 11C9.33582 11 9.00005 10.6642 9 10.25V5.75C9 5.33579 9.33579 5 9.75 5Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircle16.category = 'Sound & Music';

export default PauseCircle16;
