import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangle20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 15C10.4142 15 10.75 14.6642 10.75 14.25V10.75H14.25C14.6642 10.75 15 10.4142 15 10C15 9.58579 14.6642 9.25 14.25 9.25H10.75V5.75C10.75 5.33579 10.4142 5 10 5C9.58579 5 9.25 5.33579 9.25 5.75V9.25H5.75C5.33579 9.25 5 9.58579 5 10C5 10.4142 5.33579 10.75 5.75 10.75H9.25V14.25C9.25 14.6642 9.58579 15 10 15Z"
        fill={color}
      />
      <path
        d="M1 5.75C1 3.12665 3.12665 1 5.75 1H14.25C16.8734 1 19 3.12665 19 5.75V14.25C19 16.8734 16.8734 19 14.25 19H5.75C3.12665 19 1 16.8734 1 14.25V5.75ZM5.75 2.5C3.95507 2.5 2.5 3.95507 2.5 5.75V14.25C2.5 16.0449 3.95507 17.5 5.75 17.5H14.25C16.0449 17.5 17.5 16.0449 17.5 14.25V5.75C17.5 3.95507 16.0449 2.5 14.25 2.5H5.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PlusRectangle20;
