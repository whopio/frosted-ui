import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.75 0C17.6495 0 20 2.35051 20 5.25V18.75C20 21.6495 17.6495 24 14.75 24H9.25C6.35051 24 4 21.6495 4 18.75V5.25C4 2.35051 6.35051 0 9.25 0H14.75ZM9.25 1.5C7.17893 1.5 5.5 3.17893 5.5 5.25V18.75C5.5 20.8211 7.17893 22.5 9.25 22.5H14.75C16.8211 22.5 18.5 20.8211 18.5 18.75V5.25C18.5 3.17893 16.8211 1.5 14.75 1.5H9.25ZM14.25 19.5C14.6642 19.5 15 19.8358 15 20.25C15 20.6642 14.6642 21 14.25 21H9.75C9.33579 21 9 20.6642 9 20.25C9 19.8358 9.33579 19.5 9.75 19.5H14.25Z"
        fill={color}
      />
    </svg>
  );
};

export default MobilePhone24;
