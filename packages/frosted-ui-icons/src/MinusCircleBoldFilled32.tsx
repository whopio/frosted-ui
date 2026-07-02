import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM9.75 14.625C8.99061 14.625 8.375 15.2406 8.375 16C8.37501 16.7594 8.99061 17.375 9.75 17.375H22.25C23.0094 17.375 23.625 16.7594 23.625 16C23.625 15.2406 23.0094 14.625 22.25 14.625H9.75Z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBoldFilled32.category = 'Interface General';

export default MinusCircleBoldFilled32;
