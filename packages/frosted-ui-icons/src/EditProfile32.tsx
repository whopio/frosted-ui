import * as React from 'react';
import { IconProps } from './types';

export const EditProfile32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle cx="15" cy="7" r="6" stroke={color} strokeWidth="1.5" />
      <path
        d="M1 30.0001C1 21.5001 10.5 15 18 18.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M23.471 18.9219L17.6603 24.7326C17.1787 25.2143 16.8752 25.8456 16.8 26.5226L16.4581 29.6002C16.4014 30.1097 16.832 30.5403 17.3415 30.4836L20.4191 30.1417C21.0961 30.0665 21.7274 29.763 22.2091 29.2814L28.0198 23.4707M23.471 18.9219L25.1768 17.2162C26.4329 15.96 28.4694 15.96 29.7256 17.2162V17.2162C30.9817 18.4723 30.9817 20.5088 29.7256 21.7649L28.0198 23.4707M23.471 18.9219L28.0198 23.4707"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default EditProfile32;
