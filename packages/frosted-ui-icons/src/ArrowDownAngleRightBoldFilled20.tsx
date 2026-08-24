import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBoldFilled20"
      {...props}
    >
      <path
        d="M2.5 2.25c-.828 0-1.5.672-1.5 1.5v6.938c0 1.69 1.371 3.062 3.063 3.062h9.643l-1.232 1.155c-.605.567-.635 1.517-.069 2.121.567.605 1.517.635 2.121.069l4-3.75c.303-.284.474-.68.474-1.095 0-.415-.171-.811-.474-1.095l-4-3.75c-.604-.566-1.554-.536-2.12.069-.567.604-.537 1.554.068 2.12l1.232 1.156H4.063c-.035 0-.063-.028-.063-.063V3.75c0-.828-.672-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled20.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled20;
