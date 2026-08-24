import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquareBoldFilled20"
      {...props}
    >
      <path
        d="M13.4 1C16.493 1 19 3.507 19 6.6v6.8c0 3.093-2.507 5.6-5.6 5.6H6.6C3.507 19 1 16.493 1 13.4V6.6C1 3.507 3.507 1 6.6 1h6.8zM10 8.625c-.621 0-1.125.504-1.125 1.125V14c0 .621.504 1.125 1.125 1.125s1.125-.504 1.125-1.125V9.75c0-.621-.504-1.125-1.125-1.125zm0-3.875c-.69 0-1.25.56-1.25 1.25S9.31 7.25 10 7.25s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareBoldFilled20.category = 'Interface General';

export default InfoSquareBoldFilled20;
