import * as React from 'react';
import { IconProps } from './types';

export const Lightning32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.2305 1C22.1709 1.00027 22.7955 1.97475 22.4023 2.8291L18.4102 11.5H24.8555C25.9453 11.5007 26.5431 12.7694 25.8496 13.6104L11.834 30.6006C11.1478 31.4324 9.80401 30.8132 9.99023 29.751L12.0498 18H6.73242C5.86385 18 5.24332 17.1589 5.5 16.3291L9.88184 2.16211C10.0956 1.47122 10.7348 1.00003 11.458 1H21.2305ZM11.458 2.5C11.3925 2.50003 11.3348 2.54289 11.3154 2.60547L7.0166 16.5H12.6221C13.2554 16.5005 13.7353 17.0724 13.626 17.6963L11.7607 28.332L24.4092 13H17.6611C16.9173 13 16.4235 12.2294 16.7344 11.5537L20.9033 2.5H11.458Z"
        fill={color}
      />
    </svg>
  );
};

Lightning32.category = 'Nature & Weather';

export default Lightning32;
