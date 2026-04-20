import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.5 8C7.32843 8 8 8.67157 8 9.5V13.5C8 14.3284 7.32843 15 6.5 15C5.67157 15 5 14.3284 5 13.5V13.1211L3.56055 14.5605C2.97476 15.1463 2.02524 15.1463 1.43945 14.5605C0.853667 13.9748 0.853667 13.0252 1.43945 12.4395L2.87891 11H2.5C1.67157 11 1 10.3284 1 9.5C1 8.67157 1.67157 8 2.5 8H6.5ZM12.4395 1.43945C13.0252 0.853667 13.9748 0.853667 14.5605 1.43945C15.1463 2.02524 15.1463 2.97476 14.5605 3.56055L13.1211 5H13.5C14.3284 5 15 5.67157 15 6.5C15 7.32843 14.3284 8 13.5 8H9.5C8.67157 8 8 7.32843 8 6.5V2.5C8 1.67157 8.67157 1 9.5 1C10.3284 1 11 1.67157 11 2.5V2.87891L12.4395 1.43945Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MinimizeBoldFilled16.category = 'Arrows';

export default MinimizeBoldFilled16;
