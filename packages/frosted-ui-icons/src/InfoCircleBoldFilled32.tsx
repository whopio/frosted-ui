import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16.001 13.125C15.2417 13.125 14.6262 13.7408 14.626 14.5V23C14.6262 23.7592 15.2417 24.375 16.001 24.375C16.76 24.3747 17.3758 23.7591 17.376 23V14.5C17.3758 13.7409 16.76 13.1253 16.001 13.125ZM16 7.75C15.1717 7.75 14.5002 8.42174 14.5 9.25C14.5002 10.0783 15.1717 10.75 16 10.75C16.8283 10.75 17.4998 10.0783 17.5 9.25C17.4998 8.42174 16.8283 7.75 16 7.75Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBoldFilled32.category = 'Interface General';

export default InfoCircleBoldFilled32;
