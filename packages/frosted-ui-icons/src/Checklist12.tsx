import * as React from 'react';
import { IconProps } from './types';

export const Checklist12 = ({
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
        d="M4.5625 6.78125L5.6875 8.0625L7.4375 5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75032 0C3.92231 0 3.25 0.671154 3.25 1.5H3C2.06802 1.5 1.3125 2.25552 1.3125 3.1875V10.3125C1.3125 11.2445 2.06802 12 3 12H9C9.93198 12 10.6875 11.2445 10.6875 10.3125V3.1875C10.6875 2.25552 9.93198 1.5 9 1.5H8.75C8.75 0.671154 8.07769 0 7.24968 0H4.75032ZM8.66465 3C8.45873 3.5826 7.90311 4 7.25 4H4.75C4.09689 4 3.54127 3.5826 3.33535 3H3C2.89645 3 2.8125 3.08395 2.8125 3.1875V10.3125C2.8125 10.4161 2.89645 10.5 3 10.5H9C9.10355 10.5 9.1875 10.4161 9.1875 10.3125V3.1875C9.1875 3.08395 9.10355 3 9 3H8.66465ZM4.75 2.5V1.5H7.25V2.5H4.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Checklist12;
