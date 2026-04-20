import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.5 1C4.19036 1 4.75 1.55964 4.75 2.25C4.75 2.94036 4.19036 3.5 3.5 3.5C2.94772 3.5 2.5 3.94772 2.5 4.5V8.25C2.5 8.94036 3.05964 9.5 3.75 9.5H7.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.80964 9.05964 7.25 9.75 7.25C10.4404 7.25 11 7.80964 11 8.5C11 10.433 9.433 12 7.5 12H3.75C1.67893 12 0 10.3211 0 8.25V4.5C0 2.567 1.567 1 3.5 1ZM10.75 0C11.4404 0 12 0.559644 12 1.25V4.5C12 5.19036 11.4404 5.75 10.75 5.75C10.0596 5.75 9.5 5.19036 9.5 4.5V4.26758L6.88379 6.88379C6.39563 7.37194 5.60437 7.37194 5.11621 6.88379C4.62806 6.39563 4.62806 5.60437 5.11621 5.11621L7.73242 2.5H7.5C6.80964 2.5 6.25 1.94036 6.25 1.25C6.25 0.559644 6.80964 0 7.5 0H10.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareFilled12.category = 'Arrows';

export default ArrowUpRightFromSquareFilled12;
