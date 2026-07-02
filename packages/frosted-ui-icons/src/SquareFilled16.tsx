import * as React from 'react';
import { IconProps } from './types';

export const SquareFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15 10.75C15 13.0972 13.0972 15 10.75 15H5.25C2.90279 15 1 13.0972 1 10.75V5.25C1 2.90279 2.90279 1 5.25 1H10.75C13.0972 1 15 2.90279 15 5.25V10.75Z"
        fill={color}
      />
    </svg>
  );
};

SquareFilled16.category = 'Interface General';

export default SquareFilled16;
