import * as React from 'react';
import { IconProps } from './types';

export const ControlsBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 6.5C5.16561 6.5 6.15928 7.22619 6.55957 8.25H11C11.5523 8.25 12 8.69771 12 9.25C12 9.80227 11.5523 10.25 11 10.25H6.55957C6.15928 11.2738 5.16561 12 4 12C2.83439 12 1.84072 11.2738 1.44043 10.25H1C0.447724 10.25 1.48176e-05 9.80227 0 9.25C0 8.69771 0.447715 8.25 1 8.25H1.44043C1.84072 7.22619 2.83439 6.5 4 6.5ZM8 0C9.16561 0 10.1593 0.726191 10.5596 1.75H11C11.5523 1.75 12 2.19772 12 2.75C12 3.30227 11.5523 3.75 11 3.75H10.5596C10.1593 4.77381 9.16561 5.5 8 5.5C6.83439 5.5 5.84072 4.77381 5.44043 3.75H1C0.447724 3.75 1.48176e-05 3.30227 0 2.75C0 2.19772 0.447715 1.75 1 1.75H5.44043C5.84072 0.726191 6.83439 0 8 0Z"
        fill={color}
      />
    </svg>
  );
};

ControlsBoldFilled12.category = 'Interface General';

export default ControlsBoldFilled12;
