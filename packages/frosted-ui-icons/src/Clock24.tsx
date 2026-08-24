import * as React from 'react';
import { IconProps } from './types';

export const Clock24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Clock24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.25 2.75c.414 0 .75.336.75.75v6.639l3.469 2.775c.323.259.376.731.117 1.055-.259.323-.731.376-1.055.117l-3.75-3-.062-.057c-.14-.14-.219-.33-.219-.529v-7c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Clock24.category = 'Interface General';

export default Clock24;
