import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle20 = ({
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
        d="M10 6.5C10.4142 6.5 10.75 6.83579 10.75 7.25V11.25C10.75 11.6642 10.4142 12 10 12C9.58579 12 9.25 11.6642 9.25 11.25V7.25C9.25 6.83579 9.58579 6.5 10 6.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M11 14.5C11 15.0523 10.5523 15.5 10 15.5C9.44772 15.5 9 15.0523 9 14.5C9 13.9477 9.44772 13.5 10 13.5C10.5523 13.5 11 13.9477 11 14.5Z"
        fill={color}
      />
      <path
        d="M10 2.5C9.69071 2.5 9.40531 2.66631 9.25283 2.9354L1.59081 16.4569C1.53129 16.5619 1.5 16.6806 1.5 16.8013C1.5 17.1872 1.81281 17.5 2.19867 17.5H17.8013C18.1872 17.5 18.5 17.1872 18.5 16.8013C18.5 16.6806 18.4687 16.5619 18.4092 16.4569L10.7472 2.9354C10.5947 2.66631 10.3093 2.5 10 2.5ZM7.94779 2.1959C8.3666 1.4568 9.15049 1 10 1C10.8495 1 11.6334 1.4568 12.0522 2.19589L19.7142 15.7174C19.9015 16.0479 20 16.4214 20 16.8013C20 18.0156 19.0156 19 17.8013 19H2.19867C0.984379 19 0 18.0156 0 16.8013C0 16.4214 0.0984563 16.0479 0.285769 15.7174L7.94779 2.1959Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ExclamationTriangle20;
