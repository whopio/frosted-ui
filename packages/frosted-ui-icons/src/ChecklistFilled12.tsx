import * as React from 'react';
import { IconProps } from './types';

export const ChecklistFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChecklistFilled12"
      {...props}
    >
      <path
        d="M7.49902 0C8.18825 0 8.75 0.558514 8.75 1.25V1.52344C9.8446 1.67566 10.6875 2.61349 10.6875 3.75V9.75C10.6875 10.9926 9.68014 12 8.4375 12H3.5625C2.31986 12 1.3125 10.9926 1.3125 9.75V3.75C1.3125 2.61349 2.1554 1.67566 3.25 1.52344V1.25C3.25 0.558515 3.81175 0 4.50098 0H7.49902ZM8.28027 5.21973C7.98738 4.92683 7.51262 4.92683 7.21973 5.21973L5.25 7.18945L4.78027 6.71973C4.48738 6.42683 4.01262 6.42683 3.71973 6.71973C3.42683 7.01262 3.42683 7.48738 3.71973 7.78027L4.71973 8.78027C5.01262 9.07317 5.48738 9.07317 5.78027 8.78027L8.28027 6.28027C8.57317 5.98738 8.57317 5.51262 8.28027 5.21973ZM4.75 2.5H7.25V1.5H4.75V2.5Z"
        fill={color}
      />
    </svg>
  );
};

ChecklistFilled12.category = 'Interface General';

export default ChecklistFilled12;
