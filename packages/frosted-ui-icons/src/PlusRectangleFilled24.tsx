import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.5 1C20.0899 1 23 3.91015 23 7.5V16.5C23 20.0899 20.0898 23 16.5 23H7.5C3.91015 23 1 20.0898 1 16.5V7.5C1 3.91015 3.91015 1 7.5 1H16.5ZM12 6C11.5858 6 11.25 6.33579 11.25 6.75V11.25H6.75C6.33579 11.25 6 11.5858 6 12C6.00003 12.4142 6.3358 12.75 6.75 12.75H11.25V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H12.75V6.75C12.75 6.33579 12.4142 6 12 6Z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleFilled24.category = 'Interface General';

export default PlusRectangleFilled24;
