import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM11.75 4.75C11.3358 4.75 11 5.08579 11 5.5V12.5C11 12.6995 11.0795 12.8896 11.2188 13.0293L11.2812 13.0859L15.0312 16.0859C15.3547 16.3447 15.8272 16.2922 16.0859 15.9688C16.3447 15.6453 16.2922 15.1728 15.9688 14.9141L12.5 12.1387V5.5C12.5 5.08579 12.1642 4.75 11.75 4.75Z"
        fill={color}
      />
    </svg>
  );
};

ClockFilled24.category = 'Interface General';

export default ClockFilled24;
