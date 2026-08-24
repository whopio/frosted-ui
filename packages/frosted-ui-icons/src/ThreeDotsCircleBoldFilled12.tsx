import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zM3.375 4.875c-.582 0-1.061.443-1.12 1.01L2.25 6l.006.115c.058.567.537 1.01 1.119 1.01C3.996 7.125 4.5 6.621 4.5 6c0-.582-.443-1.061-1.01-1.12l-.115-.005zm2.625 0c-.582 0-1.061.443-1.12 1.01L4.876 6l.006.115c.058.567.537 1.01 1.119 1.01.621 0 1.125-.504 1.125-1.125 0-.582-.443-1.061-1.01-1.12L6 4.876zm2.625 0c-.582 0-1.061.443-1.12 1.01L7.5 6l.006.115c.058.567.537 1.01 1.119 1.01.621 0 1.125-.504 1.125-1.125 0-.582-.443-1.061-1.01-1.12l-.115-.005z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleBoldFilled12.category = 'Interface General';

export default ThreeDotsCircleBoldFilled12;
