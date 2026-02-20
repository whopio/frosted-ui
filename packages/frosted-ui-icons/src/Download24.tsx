import * as React from 'react';
import { IconProps } from './types';

export const Download24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M23.25 22.5C23.6642 22.5 24 22.8358 24 23.25C24 23.6642 23.6642 24 23.25 24H0.75C0.335786 24 0 23.6642 0 23.25C0 22.8358 0.335786 22.5 0.75 22.5H23.25ZM12 0C12.4142 0 12.75 0.335786 12.75 0.75V17.4395L18.9697 11.2197C19.2626 10.9268 19.7374 10.9268 20.0303 11.2197C20.3232 11.5126 20.3232 11.9874 20.0303 12.2803L12.5303 19.7803C12.2374 20.0732 11.7626 20.0732 11.4697 19.7803L3.96973 12.2803C3.67683 11.9874 3.67683 11.5126 3.96973 11.2197C4.26262 10.9268 4.73738 10.9268 5.03027 11.2197L11.25 17.4395V0.75C11.25 0.335786 11.5858 0 12 0Z"
        fill={color}
      />
    </svg>
  );
};

Download24.category = 'Arrows';

export default Download24;
