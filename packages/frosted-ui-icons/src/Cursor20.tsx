import * as React from 'react';
import { IconProps } from './types';

export const Cursor20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.70353 17.498L1.84676 3.76123C1.42635 2.57215 2.5719 1.42659 3.76098 1.84701L17.4977 6.70382C18.3833 7.01692 18.4944 8.22432 17.6807 8.69371L14.379 10.5986C13.8093 10.9272 13.7066 11.7068 14.1716 12.1719L17.8356 15.8358C18.1008 16.1011 18.2498 16.4608 18.2498 16.8358C18.2498 17.6169 17.6166 18.25 16.8356 18.25C16.4605 18.25 16.1008 18.101 15.8355 17.8358L12.1716 14.1719C11.7065 13.7068 10.9269 13.8096 10.5983 14.3793L8.69342 17.681C8.22403 18.4946 7.01663 18.3836 6.70353 17.498Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Cursor20.category = 'Arrows';

export default Cursor20;
