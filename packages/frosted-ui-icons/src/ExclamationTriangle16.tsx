import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangle16"
      {...props}
    >
      <path
        d="M6.072 2.067c.852-1.493 3.005-1.493 3.857 0l5.768 10.114c.844 1.48-.224 3.319-1.928 3.32H2.231C.528 15.5-.54 13.66.303 12.18l5.77-10.114zm2.554.744c-.276-.485-.975-.485-1.251 0l-5.77 10.113c-.273.48.074 1.076.626 1.076H13.77c.552 0 .899-.596.625-1.076L8.626 2.81zM8 11c.552 0 1 .447 1 1 0 .551-.448.999-1 1-.552 0-1-.449-1-1 0-.553.448-1 1-1zm0-6c.414 0 .75.335.75.75V9c0 .413-.336.749-.75.75-.414 0-.75-.337-.75-.75V5.75c0-.415.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangle16.category = 'Interface General';

export default ExclamationTriangle16;
