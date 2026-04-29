import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5ZM12 6.75C12.5523 6.75 13 7.19772 13 7.75V11H16.25C16.8023 11 17.25 11.4477 17.25 12C17.25 12.5523 16.8023 13 16.25 13H13V16.25C13 16.8023 12.5523 17.25 12 17.25C11.4477 17.25 11 16.8023 11 16.25V13H7.75C7.19772 13 6.75 12.5523 6.75 12C6.75 11.4477 7.19772 11 7.75 11H11V7.75C11 7.19772 11.4477 6.75 12 6.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBold24.category = 'Interface General';

export default PlusCircleBold24;
