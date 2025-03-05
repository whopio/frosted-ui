import * as React from 'react';
import { IconProps } from './types';

export const Megaphone20 = ({
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
        d="M15.5 3.5C15.5 2.94772 15.9477 2.5 16.5 2.5C17.0523 2.5 17.5 2.94772 17.5 3.5V16.5C17.5 17.0523 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.0523 15.5 16.5V16.0173C15.5003 16.0057 15.5003 15.9941 15.5 15.9825V4.01748C15.5003 4.0059 15.5003 3.99428 15.5 3.98264V3.5ZM14.0003 3.46382C14.0196 2.09979 15.1314 1 16.5 1C17.8807 1 19 2.11929 19 3.5V16.5C19 17.8807 17.8807 19 16.5 19C15.1314 19 14.0196 17.9002 14.0003 16.5362L9.5 14.9966V17.25C9.5 17.6642 9.16421 18 8.75 18C8.33579 18 8 17.6642 8 17.25V14.4835L5.88267 13.7591C5.5613 14.7687 4.61606 15.5 3.5 15.5C2.11929 15.5 1 14.3807 1 13V7C1 5.61929 2.11929 4.5 3.5 4.5C4.61605 4.5 5.56129 5.23131 5.88266 6.24086L14.0003 3.46382ZM14 5.04925L6 7.78607V12.2139L14 14.9507V5.04925ZM4.5 7.26734C4.49973 7.2557 4.49973 7.24407 4.5 7.23248V7C4.5 6.44772 4.05228 6 3.5 6C2.94772 6 2.5 6.44772 2.5 7V13C2.5 13.5523 2.94772 14 3.5 14C4.05228 14 4.5 13.5523 4.5 13V12.7675C4.49973 12.7559 4.49973 12.7443 4.5 12.7326V7.26734Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Megaphone20;
