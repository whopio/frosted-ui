import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M0.750012 1.5C0.335799 1.5 1.23978e-05 1.83579 1.23978e-05 2.25V6.3125C1.23978e-05 7.24448 0.755532 8 1.68751 8H9.47072L8.2754 9.22656C7.98636 9.52315 7.99254 9.99799 8.28908 10.2871C8.58566 10.5761 9.0605 10.57 9.34962 10.2734L11.7871 7.77344C12.071 7.48219 12.071 7.01781 11.7871 6.72656L9.34962 4.22656C9.0605 3.93003 8.58566 3.92385 8.28908 4.21289C7.99254 4.50201 7.98636 4.97685 8.2754 5.27344L9.47072 6.5H1.68751C1.58396 6.5 1.50001 6.41605 1.50001 6.3125V2.25C1.50001 1.83579 1.16423 1.5 0.750012 1.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRight12.category = 'Arrows';

export default ArrowDownAngleRight12;
