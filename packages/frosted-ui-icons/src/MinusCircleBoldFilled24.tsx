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
      data-fui-icon="MinusCircleBoldFilled24"
      {...props}
    >
      <path
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM7.75 11C7.19772 11 6.75 11.4477 6.75 12C6.75 12.5523 7.19772 13 7.75 13H16.25C16.8023 13 17.25 12.5523 17.25 12C17.25 11.4477 16.8023 11 16.25 11H7.75Z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBoldFilled24.category = 'Interface General';

export default MinusCircleBoldFilled24;
