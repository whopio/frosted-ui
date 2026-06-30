import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00033 0.000244121C10.2093 0.000244121 12 1.79096 12 3.99992V7.99959C11.9998 10.2084 10.2092 11.9993 8.00033 11.9993H4.00065C1.79187 11.9992 0.00117552 10.2083 0.000976483 7.99959V3.99992C0.000976483 1.791 1.79175 0.000308932 4.00065 0.000244121H8.00033ZM5.99854 3C5.4464 3.00007 4.99868 3.44778 4.99862 3.99992V4.99984H3.9987C3.44656 4.9999 2.99886 5.44762 2.99878 5.99976C2.99878 6.55196 3.44651 6.99961 3.9987 6.99967H4.99862V7.99959C4.99862 8.55179 5.44636 8.99944 5.99854 8.99951C6.55078 8.99951 6.99845 8.55183 6.99845 7.99959V6.99967H7.99837C8.55061 6.99967 8.99829 6.552 8.99829 5.99976C8.99821 5.44758 8.55057 4.99984 7.99837 4.99984H6.99845V3.99992C6.99839 3.44773 6.55074 3 5.99854 3Z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleBoldFilled12.category = 'Interface General';

export default PlusRectangleBoldFilled12;
