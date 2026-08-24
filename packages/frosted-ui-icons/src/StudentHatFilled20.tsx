import * as React from 'react';
import { IconProps } from './types';

export const StudentHatFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StudentHatFilled20"
      {...props}
    >
      <path
        d="M16 14.807c0 .477-.088 1.08-.495 1.582-.703.865-2.296 2.11-5.506 2.11-3.21 0-4.803-1.246-5.505-2.111C4.088 15.886 4 15.283 4 14.807v-2.84l4.71 2.5c.807.429 1.774.429 2.58 0l4.71-2.5v2.84zM9.555 1.582c.286-.11.603-.11.89 0l.14.064 8.752 4.644c.46.245.679.706.66 1.158L20 7.5v5.515c0 .414-.336.75-.75.75s-.75-.336-.75-.75V8.942l-7.914 4.202c-.367.194-.806.194-1.172 0L.664 8.499c-.885-.47-.885-1.739 0-2.209l8.75-4.644.14-.064z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StudentHatFilled20.category = 'Objects';

export default StudentHatFilled20;
