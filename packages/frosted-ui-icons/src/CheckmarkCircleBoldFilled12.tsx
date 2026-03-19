import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM8.88379 3.86621C8.39563 3.37806 7.60437 3.37806 7.11621 3.86621L5.125 5.85742L4.63379 5.36621C4.14563 4.87806 3.35437 4.87806 2.86621 5.36621C2.37806 5.85437 2.37806 6.64563 2.86621 7.13379L4.24121 8.50879C4.72937 8.99694 5.52063 8.99694 6.00879 8.50879L8.88379 5.63379C9.37194 5.14563 9.37194 4.35437 8.88379 3.86621Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleBoldFilled12.category = 'Checkmarks';

export default CheckmarkCircleBoldFilled12;
