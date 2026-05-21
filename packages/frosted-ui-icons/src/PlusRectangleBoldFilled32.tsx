import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.5 2C25.7467 2 30 6.2533 30 11.5V20.5C30 25.7467 25.7467 30 20.5 30H11.5C6.2533 30 2 25.7467 2 20.5V11.5C2 6.25329 6.2533 2 11.5 2H20.5ZM16 7.625C15.2406 7.625 14.625 8.24061 14.625 9V14.625H9C8.24061 14.625 7.625 15.2406 7.625 16C7.62503 16.7594 8.24062 17.375 9 17.375H14.625V23C14.625 23.7594 15.2406 24.375 16 24.375C16.7594 24.375 17.375 23.7594 17.375 23V17.375H23C23.7594 17.375 24.375 16.7594 24.375 16C24.375 15.2406 23.7594 14.625 23 14.625H17.375V9C17.375 8.24061 16.7594 7.625 16 7.625Z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleBoldFilled32.category = 'Interface General';

export default PlusRectangleBoldFilled32;
