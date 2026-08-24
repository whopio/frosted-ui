import * as React from 'react';
import { IconProps } from './types';

export const LogoutFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LogoutFilled20"
      {...props}
    >
      <path
        d="M10.459 1c2.476 0 4.579 1.585 5.354 3.796-.755-.208-1.597-.016-2.19.577-.643.643-.813 1.577-.516 2.377H9.75C8.507 7.75 7.5 8.758 7.5 10s1.008 2.25 2.25 2.25h3.357c-.297.8-.126 1.733.516 2.376.594.594 1.436.785 2.192.576-.775 2.213-2.88 3.8-5.356 3.8H6.675C3.54 19.002 1 16.462 1 13.327V6.675C1 3.54 3.54 1 6.675 1h3.784zm4.225 5.434c.292-.293.767-.293 1.06 0L18.78 9.47c.14.14.22.331.22.53s-.08.39-.22.53l-3.036 3.035c-.293.293-.768.293-1.06 0-.293-.292-.293-.767 0-1.06l1.755-1.755H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.69l-1.756-1.756c-.293-.293-.293-.768 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

LogoutFilled20.category = 'Interface General';

export default LogoutFilled20;
