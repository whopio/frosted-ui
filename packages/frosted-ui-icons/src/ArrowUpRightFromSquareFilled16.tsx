import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.5 1.5C6.19036 1.5 6.75 2.05964 6.75 2.75C6.75 3.44036 6.19036 4 5.5 4H5.25C4.2835 4 3.5 4.7835 3.5 5.75V10.75C3.5 11.7165 4.2835 12.5 5.25 12.5H10.25C11.2165 12.5 12 11.7165 12 10.75V10.5C12 9.80964 12.5596 9.25 13.25 9.25C13.9404 9.25 14.5 9.80964 14.5 10.5V10.75C14.5 13.0972 12.5972 15 10.25 15H5.25C2.90279 15 1 13.0972 1 10.75V5.75C1 3.40279 2.90279 1.5 5.25 1.5H5.5ZM13.75 1C14.4404 1 15 1.55964 15 2.25V6.5C15 7.19036 14.4404 7.75 13.75 7.75C13.0596 7.75 12.5 7.19036 12.5 6.5V5.26758L8.88379 8.88379C8.39563 9.37194 7.60437 9.37194 7.11621 8.88379C6.62806 8.39563 6.62806 7.60437 7.11621 7.11621L10.7324 3.5H9.5C8.80964 3.5 8.25 2.94036 8.25 2.25C8.25 1.55964 8.80964 1 9.5 1H13.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareFilled16.category = 'Arrows';

export default ArrowUpRightFromSquareFilled16;
