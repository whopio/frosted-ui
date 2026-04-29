import * as React from 'react';
import { IconProps } from './types';

export const ClockBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16 2.5C8.54416 2.5 2.5 8.54416 2.5 16C2.5 23.4558 8.54416 29.5 16 29.5C23.4558 29.5 29.5 23.4558 29.5 16C29.5 8.54416 23.4558 2.5 16 2.5ZM15.75 6C16.3023 6 16.7499 6.44776 16.75 7V16.0312L20.8896 19.4814C21.3139 19.835 21.3721 20.4664 21.0186 20.8906C20.665 21.3149 20.0336 21.3721 19.6094 21.0186L15.1094 17.2686L15.0293 17.1924C14.8513 17.0072 14.75 16.7597 14.75 16.5V7C14.7501 6.44776 15.1977 6 15.75 6Z"
        fill={color}
      />
    </svg>
  );
};

ClockBold32.category = 'Interface General';

export default ClockBold32;
