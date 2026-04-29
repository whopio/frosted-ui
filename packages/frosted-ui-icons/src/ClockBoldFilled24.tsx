import * as React from 'react';
import { IconProps } from './types';

export const ClockBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM11.75 5C11.1978 5 10.7502 5.44788 10.75 6V12.5C10.7501 12.7656 10.8558 13.0189 11.041 13.2051L11.125 13.2803L14.375 15.8809C14.8063 16.2259 15.4362 16.1559 15.7812 15.7246C16.1261 15.2934 16.0562 14.6633 15.625 14.3184L12.75 12.0186V6C12.7498 5.44788 12.3022 5 11.75 5Z"
        fill={color}
      />
    </svg>
  );
};

ClockBoldFilled24.category = 'Interface General';

export default ClockBoldFilled24;
