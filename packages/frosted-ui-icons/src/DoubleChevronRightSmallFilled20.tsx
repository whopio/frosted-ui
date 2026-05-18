import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.86943 6.71703C9.38137 6.229 9.38152 5.43767 9.86943 4.94945C10.3575 4.46138 11.1488 4.4615 11.637 4.94945L15.511 8.82054C16.1623 9.47149 16.1623 10.528 15.511 11.1789L11.637 15.05C11.1488 15.5379 10.3575 15.538 9.86943 15.05C9.3815 14.5618 9.38142 13.7705 9.86943 13.2825L13.1536 10.0002L9.86943 6.71703ZM4.3665 6.71703C3.87843 6.22899 3.87855 5.43766 4.3665 4.94945C4.85454 4.46138 5.64586 4.4615 6.13407 4.94945L10.0081 8.82054C10.6594 9.47149 10.6594 10.528 10.0081 11.1789L6.13407 15.05C5.64588 15.538 4.85454 15.5381 4.3665 15.05C3.87855 14.5618 3.87845 13.7705 4.3665 13.2825L7.65068 10.0002L4.3665 6.71703Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled20.category = 'Arrows';

export default DoubleChevronRightSmallFilled20;
