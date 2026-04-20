import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 1C4.55228 1 5 1.44772 5 2C5 2.55228 4.55228 3 4 3H3.5C2.67157 3 2 3.67157 2 4.5V8.5C2 9.32843 2.67157 10 3.5 10H7.5C8.32843 10 9 9.32843 9 8.5V8C9 7.44772 9.44771 7 10 7C10.5523 7 11 7.44772 11 8V8.5C11 10.433 9.433 12 7.5 12H3.5C1.567 12 0 10.433 0 8.5V4.5C0 2.567 1.567 1 3.5 1H4ZM11 0C11.5523 0 12 0.447715 12 1V4.5C12 5.05228 11.5523 5.5 11 5.5C10.4477 5.5 10 5.05228 10 4.5V3.41406L6.70703 6.70703C6.31651 7.09756 5.68349 7.09756 5.29297 6.70703C4.90244 6.31651 4.90244 5.68349 5.29297 5.29297L8.58594 2H7.5C6.94772 2 6.5 1.55228 6.5 1C6.5 0.447715 6.94772 0 7.5 0H11Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareBold12.category = 'Arrows';

export default ArrowUpRightFromSquareBold12;
