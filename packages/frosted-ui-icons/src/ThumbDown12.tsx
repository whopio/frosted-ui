import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.375 6.625H1.875C1.59886 6.625 1.375 6.40115 1.375 6.125V2.375C1.375 2.09885 1.59886 1.875 1.875 1.875H3.375M3.375 1.875V6.5L5.3604 10.354C5.4461 10.5204 5.61825 10.625 5.8055 10.625C6.4192 10.625 6.8904 10.0773 6.79585 9.47095L6.50805 7.625H9.12945C10.0478 7.625 10.7506 6.8072 10.6124 5.89935L10.1939 3.14935C10.0824 2.4165 9.4523 1.875 8.711 1.875H3.375Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThumbDown12;
