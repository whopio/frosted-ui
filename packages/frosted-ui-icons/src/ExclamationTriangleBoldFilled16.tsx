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
        d="M5.74219 2.13409C6.74048 0.388076 9.25967 0.387921 10.2578 2.13409L15.5 11.3099C16.4903 13.043 15.2392 15.1992 13.2432 15.1995H2.75684C0.760675 15.1993 -0.490332 13.0431 0.5 11.3099L5.74219 2.13409ZM8.00098 10.5003C7.44869 10.5003 7.00098 10.948 7.00098 11.5003C7.00114 12.0524 7.44879 12.5003 8.00098 12.5003C8.55304 12.5002 9.00081 12.0524 9.00098 11.5003C9.00097 10.9481 8.55314 10.5004 8.00098 10.5003ZM8.00098 5.00031C7.58677 5.00031 7.25098 5.33609 7.25098 5.75031V9.00031C7.25116 9.41436 7.58687 9.75031 8.00098 9.75031C8.41496 9.75016 8.7508 9.41428 8.75098 9.00031V5.75031C8.75097 5.33618 8.41507 5.00045 8.00098 5.00031Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled16.category = 'Interface General';

export default ExclamationTriangleBoldFilled16;
