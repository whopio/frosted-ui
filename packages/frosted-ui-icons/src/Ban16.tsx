import * as React from 'react';
import { IconProps } from './types';

export const Ban16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00098 1C11.8676 1 15.0018 4.13442 15.002 8.00098C15.0019 11.8675 11.8676 15.002 8.00098 15.002C4.13449 15.0018 1.0001 11.8675 1 8.00098C1.00012 4.1345 4.1345 1.00012 8.00098 1ZM4.67871 12.3838C5.60196 13.0848 6.75237 13.5019 8.00098 13.502C11.0391 13.502 13.5019 11.0391 13.502 8.00098C13.5019 6.75238 13.0848 5.60195 12.3838 4.67871L4.67871 12.3838ZM8.00098 2.5C4.96292 2.50012 2.50012 4.96292 2.5 8.00098C2.50004 9.24949 2.91632 10.401 3.61719 11.3242L11.3232 3.61719C10.4001 2.91657 9.24928 2.5 8.00098 2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Ban16.category = 'Interface General';

export default Ban16;
