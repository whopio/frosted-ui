import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquareFilled16"
      {...props}
    >
      <path
        d="M10.75 1C13.097 1 15 2.903 15 5.25v5.5c0 2.347-1.903 4.25-4.25 4.25h-5.5C2.903 15 1 13.097 1 10.75v-5.5C1 2.903 2.903 1 5.25 1h5.5zM7.997 7.25c-.414 0-.75.336-.75.75v3.25c0 .414.336.75.75.75s.75-.336.75-.75V8c0-.414-.336-.75-.75-.75zM8 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareFilled16.category = 'Interface General';

export default InfoSquareFilled16;
