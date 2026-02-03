import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.3035 5.63599C17.5964 5.3433 18.0712 5.34316 18.364 5.63599C18.6568 5.92881 18.6567 6.40363 18.364 6.69653L8.01343 17.0471L15.1667 16.9075C15.5807 16.8994 15.923 17.228 15.9314 17.6418C15.9395 18.0558 15.6109 18.3981 15.197 18.4065L6.1814 18.5833C5.97745 18.5872 5.77975 18.5087 5.6355 18.3645C5.49126 18.2203 5.41277 18.0225 5.41675 17.8186L5.59351 8.80298C5.60188 8.38909 5.9442 8.06051 6.35815 8.0686C6.77205 8.07698 7.10063 8.41929 7.09253 8.83325L6.95288 15.9866L17.3035 5.63599Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownLeft24;
