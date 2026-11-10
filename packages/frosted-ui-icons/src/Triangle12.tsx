import * as React from 'react';
import { IconProps } from './types';

export const Triangle12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Triangle12"
      {...props}
    >
      <path
        d="M1.766 10.5h8.468c.777 0 1.257-.848.857-1.514L6.857 1.928c-.388-.647-1.326-.647-1.714 0L.909 8.986c-.4.666.08 1.514.857 1.514z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Triangle12.category = 'Interface General';

export default Triangle12;
