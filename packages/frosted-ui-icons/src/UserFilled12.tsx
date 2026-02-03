import * as React from 'react';
import { IconProps } from './types';

export const UserFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 6.75C8.62964 6.75003 10.659 8.13839 11.2969 10.0283C11.4804 10.5723 11.3237 11.0965 10.999 11.457C10.6874 11.803 10.2277 12 9.75 12H2.25C1.77229 12 1.31258 11.803 1.00098 11.457C0.676301 11.0965 0.519561 10.5723 0.703125 10.0283L0.766602 9.85254C1.46806 8.05281 3.45244 6.75 6 6.75ZM6 0C7.65682 4.22623e-05 9 1.34317 9 3C9 4.65683 7.65682 5.99996 6 6C4.34315 6 3 4.65685 3 3C3 1.34315 4.34315 0 6 0Z"
        fill={color}
      />
    </svg>
  );
};

export default UserFilled12;
