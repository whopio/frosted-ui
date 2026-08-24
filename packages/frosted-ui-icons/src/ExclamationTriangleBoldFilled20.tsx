import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleBoldFilled20"
      {...props}
    >
      <path
        d="M7.2 2.25C8.417.049 11.584.049 12.8 2.25l6.77 12.252c1.18 2.132-.363 4.748-2.8 4.748H3.23c-2.437 0-3.98-2.616-2.8-4.748L7.2 2.25zM10 13.5c-.553 0-1 .448-1 1 0 .553.448 1 1 1s1-.447 1-1c0-.552-.448-1-1-1zm0-7.25c-.553 0-1 .448-1 1v4c0 .553.448 1 1 1s1-.447 1-1v-4c0-.552-.448-1-1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled20.category = 'Interface General';

export default ExclamationTriangleBoldFilled20;
