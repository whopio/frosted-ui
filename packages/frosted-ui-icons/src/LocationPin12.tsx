import * as React from 'react';
import { IconProps } from './types';

export const LocationPin12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LocationPin12"
      {...props}
    >
      <path
        d="M6 0c2.761 0 5 2.239 5 5 0 1.875-.821 3.405-1.736 4.526-.915 1.12-1.958 1.88-2.502 2.236-.466.304-1.058.304-1.524 0-.544-.356-1.587-1.115-2.502-2.236C1.821 8.405 1 6.876 1 5c0-2.761 2.239-5 5-5zm0 1.5C4.067 1.5 2.5 3.067 2.5 5c0 1.418.619 2.623 1.398 3.578.749.917 1.614 1.561 2.102 1.886.488-.325 1.353-.969 2.102-1.886C8.882 7.623 9.5 6.418 9.5 5c0-1.933-1.567-3.5-3.5-3.5zm0 1c1.38 0 2.5 1.12 2.5 2.5S7.38 7.5 6 7.5 3.5 6.38 3.5 5 4.62 2.5 6 2.5zM6 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

LocationPin12.category = 'Location';

export default LocationPin12;
