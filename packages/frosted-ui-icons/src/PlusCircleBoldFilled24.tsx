import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 6.25C11.1716 6.25 10.5 6.92157 10.5 7.75V10.5H7.75C6.92157 10.5 6.25 11.1716 6.25 12C6.25 12.8284 6.92157 13.5 7.75 13.5H10.5V16.25C10.5 17.0784 11.1716 17.75 12 17.75C12.8284 17.75 13.5 17.0784 13.5 16.25V13.5H16.25C17.0784 13.5 17.75 12.8284 17.75 12C17.75 11.1716 17.0784 10.5 16.25 10.5H13.5V7.75C13.5 6.92157 12.8284 6.25 12 6.25Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBoldFilled24.category = 'Product Icons';

export default PlusCircleBoldFilled24;
