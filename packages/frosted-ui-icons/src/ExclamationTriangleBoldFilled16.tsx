import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.74219 2.13412C6.74048 0.388107 9.25967 0.387951 10.2578 2.13412L15.5 11.3099C16.4903 13.043 15.2392 15.1992 13.2432 15.1996H2.75684C0.760675 15.1994 -0.490332 13.0431 0.5 11.3099L5.74219 2.13412ZM8.00098 10.5003C7.44869 10.5003 7.00098 10.9481 7.00098 11.5003C7.00114 12.0525 7.44879 12.5003 8.00098 12.5003C8.55304 12.5002 9.00081 12.0524 9.00098 11.5003C9.00097 10.9481 8.55314 10.5005 8.00098 10.5003ZM8.00098 5.00034C7.58677 5.00034 7.25098 5.33612 7.25098 5.75034V9.00034C7.25116 9.4144 7.58687 9.75034 8.00098 9.75034C8.41496 9.75019 8.7508 9.41431 8.75098 9.00034V5.75034C8.75097 5.33621 8.41507 5.00048 8.00098 5.00034Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled16.category = 'Interface General';

export default ExclamationTriangleBoldFilled16;
