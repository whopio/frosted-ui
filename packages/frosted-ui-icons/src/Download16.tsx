import * as React from 'react';
import { IconProps } from './types';

export const Download16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.25 14.5C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H0.75C0.335786 16 0 15.6642 0 15.25C0 14.8358 0.335786 14.5 0.75 14.5H15.25ZM8 0C8.41421 0 8.75 0.335786 8.75 0.75V10.1895L12.4697 6.46973C12.7626 6.17683 13.2374 6.17683 13.5303 6.46973C13.8232 6.76262 13.8232 7.23738 13.5303 7.53027L8.53027 12.5303C8.23738 12.8232 7.76262 12.8232 7.46973 12.5303L2.46973 7.53027C2.17683 7.23738 2.17683 6.76262 2.46973 6.46973C2.76262 6.17683 3.23738 6.17683 3.53027 6.46973L7.25 10.1895V0.75C7.25 0.335786 7.58579 0 8 0Z"
        fill={color}
      />
    </svg>
  );
};

Download16.category = 'Arrows';

export default Download16;
