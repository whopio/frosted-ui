import * as React from 'react';
import { IconProps } from './types';

export const ExpandBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.68945 13.1895C9.27524 12.6037 10.2248 12.6037 10.8105 13.1895C11.3963 13.7752 11.3963 14.7248 10.8105 15.3105L6.12109 20H9.75C10.5784 20 11.25 20.6716 11.25 21.5C11.25 22.3284 10.5784 23 9.75 23H2.5C1.67157 23 1 22.3284 1 21.5V14.25C1 13.4216 1.67157 12.75 2.5 12.75C3.32843 12.75 4 13.4216 4 14.25V17.8789L8.68945 13.1895ZM21.5 1C22.3284 1 23 1.67157 23 2.5V9.75C23 10.5784 22.3284 11.25 21.5 11.25C20.6716 11.25 20 10.5784 20 9.75V6.12109L15.3105 10.8105C14.7248 11.3963 13.7752 11.3963 13.1895 10.8105C12.6037 10.2248 12.6037 9.27524 13.1895 8.68945L17.8789 4H14.25C13.4216 4 12.75 3.32843 12.75 2.5C12.75 1.67157 13.4216 1 14.25 1H21.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExpandBoldFilled24.category = 'Arrows';

export default ExpandBoldFilled24;
