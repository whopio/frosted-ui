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
        d="M11.999 0C18.6258 0 23.9977 5.37228 23.998 11.999C23.998 18.626 18.626 23.998 11.999 23.998C5.37229 23.9977 0 18.6258 0 11.999C0.000304192 5.37248 5.37248 0.000320557 11.999 0ZM12 15.875C11.3787 15.875 10.874 16.3787 10.874 17V17.0195L10.8809 17.1348C10.9384 17.7022 11.4174 18.1445 12 18.1445C12.6211 18.1443 13.125 17.6407 13.125 17.0195V17C13.125 16.3788 12.6211 15.8753 12 15.875ZM12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V13.25C11.25 13.6642 11.5858 14 12 14C12.414 13.9997 12.75 13.6641 12.75 13.25V6C12.75 5.58595 12.414 5.25026 12 5.25Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleFilled24.category = 'Interface General';

export default ExclamationCircleFilled24;
