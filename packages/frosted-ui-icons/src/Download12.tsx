import * as React from 'react';
import { IconProps } from './types';

export const Download12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.25 10.5C11.6642 10.5 12 10.8358 12 11.25C12 11.6642 11.6642 12 11.25 12H0.75C0.335786 12 0 11.6642 0 11.25C0 10.8358 0.335786 10.5 0.75 10.5H11.25ZM6 0C6.41421 0 6.75 0.335786 6.75 0.75V6.43945L8.71973 4.46973C9.01262 4.17683 9.48738 4.17683 9.78027 4.46973C10.0732 4.76262 10.0732 5.23738 9.78027 5.53027L6.53027 8.78027C6.23738 9.07317 5.76262 9.07317 5.46973 8.78027L2.21973 5.53027C1.92683 5.23738 1.92683 4.76262 2.21973 4.46973C2.51262 4.17683 2.98738 4.17683 3.28027 4.46973L5.25 6.43945V0.75C5.25 0.335786 5.58579 0 6 0Z"
        fill={color}
      />
    </svg>
  );
};

Download12.category = 'Arrows';

export default Download12;
