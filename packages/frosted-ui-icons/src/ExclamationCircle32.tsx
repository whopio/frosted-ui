import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M2.5 16C2.5 8.54416 8.54416 2.5 16 2.5C23.4558 2.5 29.5 8.54416 29.5 16C29.5 23.4558 23.4558 29.5 16 29.5C8.54416 29.5 2.5 23.4558 2.5 16ZM16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1ZM16.75 8.75C16.75 8.33579 16.4142 8 16 8C15.5858 8 15.25 8.33579 15.25 8.75V17.25C15.25 17.6642 15.5858 18 16 18C16.4142 18 16.75 17.6642 16.75 17.25V8.75ZM16 23.25C16.6904 23.25 17.25 22.6904 17.25 22C17.25 21.3096 16.6904 20.75 16 20.75C15.3096 20.75 14.75 21.3096 14.75 22C14.75 22.6904 15.3096 23.25 16 23.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ExclamationCircle32;
