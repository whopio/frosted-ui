import * as React from 'react';
import { IconProps } from './types';

export const MessagesQuestion12 = ({
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
        d="M5.67965 10.1074L4.64711 9.2418C4.55709 9.16635 4.44338 9.125 4.32591 9.125H2.875C2.32271 9.125 1.875 8.6773 1.875 8.125V2.875C1.875 2.32271 2.32271 1.875 2.875 1.875H9.125C9.6773 1.875 10.125 2.32271 10.125 2.875V8.125C10.125 8.6773 9.6773 9.125 9.125 9.125H7.68795C7.5715 9.125 7.45865 9.16565 7.369 9.23995L6.31985 10.1091C6.13395 10.2632 5.8646 10.2624 5.67965 10.1074Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.01104 5.95665C6.06189 5.6184 6.25114 5.4357 6.44084 5.3068C6.62634 5.18065 6.81189 5.01695 6.81189 4.71384C6.81189 4.29549 6.47624 3.95667 6.06189 3.95667C5.64749 3.95667 5.31189 4.29549 5.31189 4.71384"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M5.625 7.125C5.625 7.3321 5.7929 7.5 6 7.5C6.2071 7.5 6.375 7.3321 6.375 7.125C6.375 6.9179 6.2071 6.75 6 6.75C5.7929 6.75 5.625 6.9179 5.625 7.125Z"
        fill={color}
        stroke={color}
        strokeWidth=".25"
      />
    </svg>
  );
};

export default MessagesQuestion12;
