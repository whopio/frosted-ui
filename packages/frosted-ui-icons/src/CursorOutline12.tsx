import * as React from 'react';
import { IconProps } from './types';

export const CursorOutline12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M1.37236 2.48948C1.12623 1.79537 1.79537 1.12623 2.48948 1.37236L10.4031 4.17851C11.1577 4.44606 11.1864 5.5025 10.4476 5.81075L8.04887 6.81143L10.0562 8.81878C10.3979 9.16049 10.3979 9.71451 10.0562 10.0562C9.71452 10.3979 9.1605 10.3979 8.81879 10.0562L6.81143 8.04886L5.81075 10.4476C5.5025 11.1864 4.44606 11.1577 4.17851 10.4031L1.37236 2.48948Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CursorOutline12;
