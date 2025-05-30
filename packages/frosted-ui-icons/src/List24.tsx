import * as React from 'react';
import { IconProps } from './types';

export const List24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.75 18.76V5.24C2.75 3.86481 3.86481 2.75 5.24 2.75H18.76C20.1352 2.75 21.25 3.86481 21.25 5.24V18.76C21.25 20.1352 20.1352 21.25 18.76 21.25H5.24C3.86481 21.25 2.75 20.1352 2.75 18.76zM11.75 8.30933H17.25M11.75 12.3093H16.25M11.75 16.3093H15.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.309" cy="8.309" r="1.25" fill={color} />
      <circle cx="7.309" cy="12.309" r="1.25" fill={color} />
      <circle cx="7.309" cy="16.309" r="1.25" fill={color} />
    </svg>
  );
};

export default List24;
