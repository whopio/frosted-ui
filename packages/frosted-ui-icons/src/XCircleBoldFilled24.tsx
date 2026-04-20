import * as React from 'react';
import { IconProps } from './types';

export const XCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM16.0654 7.93457C15.4796 7.34878 14.5301 7.34878 13.9443 7.93457L12 9.87891L10.0557 7.93457C9.46988 7.34878 8.52036 7.34878 7.93457 7.93457C7.34878 8.52036 7.34878 9.46988 7.93457 10.0557L9.87891 12L7.93457 13.9443C7.34878 14.5301 7.34878 15.4796 7.93457 16.0654C8.52036 16.6512 9.46988 16.6512 10.0557 16.0654L12 14.1211L13.9443 16.0654C14.5301 16.6512 15.4796 16.6512 16.0654 16.0654C16.6512 15.4796 16.6512 14.5301 16.0654 13.9443L14.1211 12L16.0654 10.0557C16.6512 9.46988 16.6512 8.52036 16.0654 7.93457Z"
        fill={color}
      />
    </svg>
  );
};

XCircleBoldFilled24.category = 'Interface General';

export default XCircleBoldFilled24;
