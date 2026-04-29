import * as React from 'react';
import { IconProps } from './types';

export const Ban20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM4.89844 16.1611C6.28327 17.3091 8.06069 18 10 18C14.4183 18 18 14.4183 18 10C18 8.06069 17.3091 6.28327 16.1611 4.89844L4.89844 16.1611ZM10 2C5.58172 2 2 5.58172 2 10C2 11.9388 2.69046 13.7159 3.83789 15.1006L15.1006 3.83789C13.7159 2.69046 11.9388 2 10 2Z"
        fill={color}
      />
    </svg>
  );
};

Ban20.category = 'Interface General';

export default Ban20;
