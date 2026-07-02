import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM7.75 10.75C7.05964 10.75 6.5 11.3096 6.5 12C6.5 12.6904 7.05964 13.25 7.75 13.25H16.25C16.9404 13.25 17.5 12.6904 17.5 12C17.5 11.3096 16.9404 10.75 16.25 10.75H7.75Z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBoldFilled24.category = 'Interface General';

export default MinusCircleBoldFilled24;
