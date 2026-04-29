import * as React from 'react';
import { IconProps } from './types';

export const PlusBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 0.75C16.8284 0.75 17.5 1.42157 17.5 2.25V14.5H29.75C30.5784 14.5 31.25 15.1716 31.25 16C31.25 16.8284 30.5784 17.5 29.75 17.5H17.5V29.75C17.5 30.5784 16.8284 31.25 16 31.25C15.1716 31.25 14.5 30.5784 14.5 29.75V17.5H2.25C1.42157 17.5 0.75 16.8284 0.75 16C0.75 15.1716 1.42157 14.5 2.25 14.5H14.5V2.25C14.5 1.42157 15.1716 0.75 16 0.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusBoldFilled32.category = 'Interface General';

export default PlusBoldFilled32;
