import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.5 12C11.3284 12 12 12.6716 12 13.5V21.5C12 22.3284 11.3284 23 10.5 23C9.67157 23 9 22.3284 9 21.5V17.1211L3.56055 22.5605C2.97476 23.1463 2.02524 23.1463 1.43945 22.5605C0.853667 21.9748 0.853667 21.0252 1.43945 20.4395L6.87891 15H2.5C1.67157 15 1 14.3284 1 13.5C1 12.6716 1.67157 12 2.5 12H10.5ZM20.4395 1.43945C21.0252 0.853667 21.9748 0.853667 22.5605 1.43945C23.1463 2.02524 23.1463 2.97476 22.5605 3.56055L17.1211 9H21.5C22.3284 9 23 9.67157 23 10.5C23 11.3284 22.3284 12 21.5 12H13.5C12.6716 12 12 11.3284 12 10.5V2.5C12 1.67157 12.6716 1 13.5 1C14.3284 1 15 1.67157 15 2.5V6.87891L20.4395 1.43945Z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBoldFilled24.category = 'Arrows';

export default MinimizeBoldFilled24;
