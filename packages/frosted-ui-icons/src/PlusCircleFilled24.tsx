import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_6387_38)">
        <path
          d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 6C11.5858 6 11.25 6.33579 11.25 6.75V11.25H6.75C6.33579 11.25 6 11.5858 6 12C6.00003 12.4142 6.3358 12.75 6.75 12.75H11.25V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H12.75V6.75C12.75 6.33579 12.4142 6 12 6Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_6387_38">
          <path fill={color} d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusCircleFilled24;
