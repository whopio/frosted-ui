import * as React from 'react';
import { IconProps } from './types';

export const ExpandBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.293 18.293C12.6835 17.9024 13.3165 17.9024 13.707 18.293C14.0975 18.6835 14.0975 19.3165 13.707 19.707L4.41406 29H13C13.5523 29 14 29.4477 14 30C14 30.5523 13.5523 31 13 31H2C1.44774 31 1.00003 30.5523 1 30V19C1 18.4477 1.44771 18 2 18C2.55229 18 3 18.4477 3 19V27.5859L12.293 18.293ZM30 1C30.5523 1 31 1.44772 31 2V13C31 13.5523 30.5523 14 30 14C29.4477 14 29 13.5523 29 13V4.41406L19.707 13.707C19.3165 14.0975 18.6835 14.0975 18.293 13.707C17.9025 13.3165 17.9025 12.6835 18.293 12.293L27.5859 3H19C18.4477 3 18 2.55226 18 2C18 1.44772 18.4477 1 19 1H30Z"
        fill={color}
      />
    </svg>
  );
};

ExpandBold32.category = 'Arrows';

export default ExpandBold32;
