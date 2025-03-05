import * as React from 'react';
import { IconProps } from './types';

export const Plus20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.25 18.25C9.25 18.6642 9.58579 19 10 19C10.4142 19 10.75 18.6642 10.75 18.25V10.75H18.25C18.6642 10.75 19 10.4142 19 10C19 9.58579 18.6642 9.25 18.25 9.25H10.75V1.75C10.75 1.33579 10.4142 1 10 1C9.58579 1 9.25 1.33579 9.25 1.75V9.25H1.75C1.33579 9.25 1 9.58579 1 10C1 10.4142 1.33579 10.75 1.75 10.75H9.25V18.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Plus20;
