import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M22.75 1C27.3063 1 31 4.69365 31 9.25V22.75C31 27.3063 27.3063 31 22.75 31H9.25C4.69365 31 1 27.3063 1 22.75V9.25C1 4.69365 4.69365 1 9.25 1H22.75ZM16.001 13C15.5869 13 15.2512 13.336 15.251 13.75V23.25C15.2512 23.664 15.5869 24 16.001 24C16.4146 23.9995 16.7508 23.6637 16.751 23.25V13.75C16.7508 13.3363 16.4146 13.0005 16.001 13ZM16.001 8C15.3107 8 14.7502 8.55981 14.75 9.25C14.7502 9.94019 15.3107 10.5 16.001 10.5C16.6908 10.4995 17.2508 9.93986 17.251 9.25C17.2508 8.56014 16.6908 8.00053 16.001 8Z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareFilled32.category = 'Interface General';

export default InfoSquareFilled32;
