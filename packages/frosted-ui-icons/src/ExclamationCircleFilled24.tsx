import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM12 15.875C11.3787 15.875 10.875 16.3787 10.875 17V17.0195L10.8809 17.1348C10.9384 17.7022 11.4174 18.1445 12 18.1445C12.6213 18.1445 13.125 17.6409 13.125 17.0195V17C13.125 16.3787 12.6213 15.875 12 15.875ZM12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V13C11.25 13.4142 11.5858 13.75 12 13.75C12.4142 13.75 12.75 13.4142 12.75 13V6C12.75 5.58579 12.4142 5.25 12 5.25Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleFilled24.category = 'Interface General';

export default ExclamationCircleFilled24;
