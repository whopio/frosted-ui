import * as React from 'react';
import { IconProps } from './types';

export const Browser20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5 5C5 5.55228 4.55228 6 4 6 3.44772 6 3 5.55228 3 5 3 4.44772 3.44772 4 4 4 4.55228 4 5 4.44772 5 5zM8 5C8 5.55228 7.55228 6 7 6 6.44772 6 6 5.55228 6 5 6 4.44772 6.44772 4 7 4 7.55228 4 8 4.44772 8 5zM10 6C10.5523 6 11 5.55228 11 5 11 4.44772 10.5523 4 10 4 9.44771 4 9 4.44772 9 5 9 5.55228 9.44771 6 10 6z"
        fill={color}
      />
      <path
        d="M0.5 3.75C0.5 2.23122 1.73122 1 3.25 1H16.75C18.2688 1 19.5 2.23122 19.5 3.75V16.25C19.5 17.7688 18.2688 19 16.75 19H3.25C1.73122 19 0.5 17.7688 0.5 16.25V3.75ZM3.25 2.5C2.55964 2.5 2 3.05964 2 3.75V7.25H18V3.75C18 3.05964 17.4404 2.5 16.75 2.5H3.25ZM16.75 17.5C17.4404 17.5 18 16.9404 18 16.25V8.75H2V16.25C2 16.9404 2.55964 17.5 3.25 17.5H16.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Browser20;
