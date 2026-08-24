import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM3.49 4.88C4.057 4.94 4.5 5.419 4.5 6c0 .621-.504 1.125-1.125 1.125-.582 0-1.061-.443-1.12-1.01L2.25 6l.006-.115c.058-.567.537-1.01 1.119-1.01l.115.006zm2.625 0c.567.059 1.01.538 1.01 1.12 0 .621-.504 1.125-1.125 1.125-.582 0-1.061-.443-1.12-1.01L4.876 6l.006-.115c.058-.567.537-1.01 1.119-1.01l.115.006zm2.625 0c.567.059 1.01.538 1.01 1.12 0 .621-.504 1.125-1.125 1.125-.582 0-1.061-.443-1.12-1.01L7.5 6l.006-.115c.058-.567.537-1.01 1.119-1.01l.115.006z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleBold12.category = 'Interface General';

export default ThreeDotsCircleBold12;
