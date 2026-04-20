import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.75 0C17.2018 0 20 2.79822 20 6.25V13.75C20 17.2018 17.2018 20 13.75 20H6.25C2.79822 20 1.29287e-07 17.2018 0 13.75V6.25C0 2.79822 2.79822 5.44135e-08 6.25 0H13.75ZM7.5 7.75C7.08579 7.75 6.75 8.08579 6.75 8.5C6.75 8.91421 7.08579 9.25 7.5 9.25H9.49902V14H7.5C7.08579 14 6.75 14.3358 6.75 14.75C6.75 15.1642 7.08579 15.5 7.5 15.5H12.5449L12.6221 15.4961C13.0001 15.4575 13.2949 15.1382 13.2949 14.75C13.2949 14.3618 13.0001 14.0425 12.6221 14.0039L12.5449 14H10.999V8.5C10.999 8.08579 10.6632 7.75 10.249 7.75H7.5ZM10 4.5C9.44771 4.5 9 4.94772 9 5.5C9 6.05228 9.44771 6.5 10 6.5C10.5523 6.5 11 6.05228 11 5.5C11 4.94772 10.5523 4.5 10 4.5Z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareFilled20.category = 'Interface General';

export default InfoSquareFilled20;
