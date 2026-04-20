import * as React from 'react';
import { IconProps } from './types';

export const ControlsFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 7C5.11933 7 6.06613 7.73584 6.38477 8.75H11.25C11.6642 8.75 12 9.08579 12 9.5C12 9.9142 11.6642 10.25 11.25 10.25H6.38477C6.06613 11.2642 5.11933 12 4 12C2.88067 12 1.93387 11.2642 1.61523 10.25H0.75C0.335796 10.25 1.48175e-05 9.9142 0 9.5C0 9.08579 0.335787 8.75 0.75 8.75H1.61523C1.93387 7.73584 2.88067 7 4 7ZM8 0C9.11933 0 10.0661 0.735839 10.3848 1.75H11.25C11.6642 1.75 12 2.08579 12 2.5C12 2.9142 11.6642 3.25 11.25 3.25H10.3848C10.0661 4.26416 9.11933 5 8 5C6.88067 5 5.93387 4.26416 5.61523 3.25H0.75C0.335796 3.25 1.48175e-05 2.9142 0 2.5C0 2.08579 0.335786 1.75 0.75 1.75H5.61523C5.93387 0.735839 6.88067 0 8 0Z"
        fill={color}
      />
    </svg>
  );
};

ControlsFilled12.category = 'Interface General';

export default ControlsFilled12;
