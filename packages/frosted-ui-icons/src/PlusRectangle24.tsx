import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangle24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M12 18C11.5858 18 11.25 17.6642 11.25 17.25V12.75H6.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H11.25V6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H12.75V17.25C12.75 17.6642 12.4142 18 12 18Z"
        fill={color}
      />
      <path
        d="M2 6.75C2 4.12665 4.12665 2 6.75 2H17.25C19.8734 2 22 4.12665 22 6.75V17.25C22 19.8734 19.8734 22 17.25 22H6.75C4.12665 22 2 19.8734 2 17.25V6.75ZM6.75 3.5C4.95507 3.5 3.5 4.95507 3.5 6.75V17.25C3.5 19.0449 4.95507 20.5 6.75 20.5H17.25C19.0449 20.5 20.5 19.0449 20.5 17.25V6.75C20.5 4.95507 19.0449 3.5 17.25 3.5H6.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PlusRectangle24;
