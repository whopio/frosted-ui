import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22 19.75C22 13.8929 20.5 8.25 11 8.25V4.1841C11 3.74194 10.4682 3.5174 10.1513 3.82574L2.30248 11.4624C1.99983 11.7569 1.99983 12.2431 2.30248 12.5375L10.1513 20.1743C10.4682 20.4826 11 20.2581 11 19.8159V15.75C14.9048 15.75 18.5833 15.8452 22 19.75Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyBoldFilled24.category = 'Arrows';

export default ReplyBoldFilled24;
